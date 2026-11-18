const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { headers } = require('./web-config.cjs');
function prepareRelease({ preview = false, root = __dirname } = {}) {
  const { publicConfig } = require('./auth-server-config.cjs');
  const config = publicConfig(root);
  let keyIsPublic = /^sb_publishable_[A-Za-z0-9_-]+$/.test(config.publishableKey || '');
  try { keyIsPublic ||= JSON.parse(Buffer.from(config.publishableKey.split('.')[1], 'base64url')).role === 'anon'; } catch {}
  if (config.publishableKey && !keyIsPublic) throw new Error('Auth config must contain only a publishable or legacy anon key. Never ship a secret key.');
  const configured = /^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(config.url || '') && keyIsPublic;
  if (!preview && !configured) throw new Error('Release blocked: configure and test real accounts first. Use --preview only for a non-launch review artifact.');
  const bundle = require('./tools/build-single-file.cjs').buildSingleFile({ root });
  const bytes = Buffer.from(bundle.output);
  if (/sb_secret_[A-Za-z0-9_-]{12,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(bundle.output)) throw new Error('Private credential detected in bundled frontend.');
  const files = [{ name: 'index.html', bytes, sha256: createHash('sha256').update(bytes).digest('hex') }];
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const output = path.join(root, 'release', `hamkema-${preview ? 'preview' : 'candidate'}-${stamp}`);
  fs.mkdirSync(output, { recursive: true });
  for (const { name, bytes } of files) { const target = path.join(output, name); fs.mkdirSync(path.dirname(target), { recursive: true }); fs.writeFileSync(target, bytes); }
  fs.writeFileSync(path.join(output, '_headers'), '/*\n' + Object.entries({ ...headers, 'Content-Security-Policy': bundle.csp }).map(([name, value]) => `  ${name}: ${value}`).join('\n') + '\n  Cache-Control: no-cache\n');
  const manifest = { preview, configured, liveAuthVerified: false, hostedVerified: false, output, files: files.map(({ name, bytes, sha256 }) => ({ name, bytes: bytes.length, sha256 })) };
  fs.writeFileSync(output + '.manifest.json', JSON.stringify(manifest, null, 2));
  return manifest;
}
if (require.main === module) {
  try { const result = prepareRelease({ preview: process.argv.includes('--preview') }); console.log(JSON.stringify({ output: result.output, files: result.files.length, preview: result.preview, configured: result.configured, note: 'Review candidate only. Verify email delivery and deployed security headers before launch.' }, null, 2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
module.exports = { prepareRelease };
