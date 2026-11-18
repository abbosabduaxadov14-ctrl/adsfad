const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { promisify } = require('node:util');
const gzip = promisify(require('node:zlib').gzip);
const { publicFiles, frontendSource, headers } = require('./web-config.cjs');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.ttf': 'font/ttf' };
function createServer(root = __dirname) {
  const cache = new Map();
  const bundle = require('./tools/build-single-file.cjs').buildSingleFile({ root });
  const { publicConfig, configScript } = require('./auth-server-config.cjs');
  const authConfig = Buffer.from(configScript(publicConfig(root)));
  const server = http.createServer(async (req, res) => {
    for (const [name, value] of Object.entries(headers)) res.setHeader(name, value);
    res.setHeader('Content-Security-Policy', bundle.csp);
    const fail = (status, message) => { res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(req.method === 'HEAD' ? undefined : message); };
    if (!['GET', 'HEAD'].includes(req.method)) { res.setHeader('Allow', 'GET, HEAD'); return fail(405, 'Method not allowed'); }
    let requested;
    try { requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
    catch { return fail(400, 'Bad request'); }
    const name = requested === '/' ? 'index.html' : requested.slice(1);
    const extension = path.extname(name);
    if (!publicFiles.has(name) || !types[extension]) return fail(404, 'Not found');
    if (name.endsWith('.html') && name !== 'index.html') {
      const query = new URL(req.url, 'http://localhost').searchParams;
      query.set('page', name.slice(0, -5));
      res.writeHead(302, { Location: '/index.html?' + query, 'Cache-Control': 'no-store' }); return res.end();
    }
    if (name === 'auth-config.js') {
      res.writeHead(200, { 'Content-Type': types['.js'], 'Cache-Control': 'no-store' });
      return res.end(req.method === 'HEAD' ? undefined : authConfig);
    }
    try {
      const actual = await fs.realpath(path.join(root, name === 'index.html' ? 'index.html' : frontendSource(name)));
      if (!actual.startsWith(root + path.sep)) return fail(404, 'Not found');
      const stat = await fs.stat(actual);
      let cached = cache.get(name);
      if (!cached || cached.mtime !== stat.mtimeMs || cached.size !== stat.size) {
        const body = await fs.readFile(actual);
        cached = { mtime: stat.mtimeMs, size: stat.size, body, etag: 'W/"' + createHash('sha256').update(body).digest('hex') + '"' };
        cache.set(name, cached);
      }
      const noStore = extension === '.html';
      res.setHeader('Cache-Control', noStore ? 'no-store' : 'public, max-age=0, must-revalidate');
      res.setHeader('Content-Type', types[extension]); res.setHeader('Vary', 'Accept-Encoding'); res.setHeader('ETag', cached.etag);
      if (!noStore && req.headers['if-none-match']?.split(',').map(value => value.trim()).includes(cached.etag)) { res.writeHead(304); return res.end(); }
      let body = cached.body;
      const acceptsGzip = (req.headers['accept-encoding'] || '').split(',').some(value => /^gzip(?:\s*;\s*q=(?:1(?:\.0*)?|0?\.\d+))?\s*$/.test(value.trim()) && !/q=0(?:\.0*)?\s*$/.test(value));
      if (body.length > 1024 && acceptsGzip && ['.html', '.js', '.css', '.svg'].includes(extension)) {
        cached.compressed ||= gzip(cached.body); body = await cached.compressed; res.setHeader('Content-Encoding', 'gzip');
      }
      res.setHeader('Content-Length', body.length); res.writeHead(200); res.end(req.method === 'HEAD' ? undefined : body);
    } catch { fail(404, 'Not found'); }
  });
  server.requestTimeout = 15000; server.headersTimeout = 10000; server.keepAliveTimeout = 5000;
  return server;
}
if (require.main === module) {
  const port = Number(process.env.PORT || 4173);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid PORT');
  createServer().listen(port, '127.0.0.1', () => console.log('Hamkema: http://127.0.0.1:' + port));
}
module.exports = { createServer };
