const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { publicFiles, frontendSource } = require('../web-config.cjs');
const { publicConfig, configScript } = require('../auth-server-config.cjs');

// Sahifalar oddiy <template> ichida saqlanadi. `team` — faqat eski manzil,
// u "About us" bo'limiga yo'naltiriladi va alohida template talab qilmaydi.
const ROUTES = ['index', 'signup', 'signin', 'watch', 'lesson', 'discovery', 'notes'];

// Har bir sahifadagi script tartibi saqlanishi uchun yagona global tartib.
const JS_ORDER = [
  'vendor/supabase.js', 'auth-config.js', 'supabaseClient.js', 'signup.js',
  'courses.js', 'micro-lectures.js', 'course-guides.js', 'quiz-data.js',
  'notes-store.js', 'catalog.js', 'landing.js', 'watch.js',
  'app.js', 'pilot.js', 'discovery.js', 'notes.js'
];

const attribute = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const ROUTER = [
  '(function () {',
  '  var params = new URLSearchParams(location.search);',
  "  var page = params.get('page') || 'index';",
  "  if (page === 'team') { location.replace('index.html#about'); return; }",
  "  var routes = ['index', 'signup', 'signin', 'watch', 'lesson', 'discovery', 'notes'];",
  "  if (routes.indexOf(page) === -1) page = 'index';",
  "  var template = document.getElementById('page-' + page);",
  '  window.__hamkemaPage = page;',
  "  document.title = template.getAttribute('data-title') || 'Hamkema';",
  "  document.body.className = template.getAttribute('data-body') || '';",
  "  var sheets = document.querySelectorAll('style[data-page]');",
  '  for (var i = 0; i < sheets.length; i++) {',
  "    sheets[i].disabled = sheets[i].getAttribute('data-page') !== page;",
  '  }',
  '  var mounted = template.content.cloneNode(true);',
  "  var images = mounted.querySelectorAll('[data-asset]');",
  '  for (var j = 0; j < images.length; j++) {',
  "    images[j].src = HAMKEMA_ASSETS[images[j].getAttribute('data-asset')];",
  '  }',
  "  document.getElementById('hamkema-app').replaceWith(mounted);",
  '})();'
].join('\n');

function buildSingleFile({ root = path.resolve(__dirname, '..'), write = true } = {}) {
  const pages = [...publicFiles].filter(name => name.endsWith('.html'));
  const code = {};
  const assets = {};
  const mime = { '.svg': 'image/svg+xml', '.png': 'image/png', '.ttf': 'font/ttf' };

  for (const name of [...publicFiles, 'landing.css', 'assets/fonts/google-fonts.css']) {
    const bytes = fs.readFileSync(path.join(root, frontendSource(name) || path.join('frontend', name)));
    const extension = path.extname(name);
    if (mime[extension]) {
      assets[name] = 'data:' + mime[extension] + ';base64,' + bytes.toString('base64');
    } else {
      code[name] = (name === 'auth-config.js' ? configScript(publicConfig(root)) : bytes.toString('utf8'))
        .replace(/\r\n?/g, '\n').replace(/^\uFEFF/, '');
    }
  }

  function routeLinks(content) {
    return content.replace(/href="\.\/"/g, 'href="index.html"').replace(/(?<![\w/.-])([a-z]+)\.html(\?)?/g, (match, page, query) => {
      if (!pages.includes(page + '.html')) return match;
      if (page === 'index') return 'index.html' + (query || '');
      return 'index.html?page=' + page + (query ? '&' : '');
    });
  }

  for (const name of pages) code[name] = routeLinks(code[name]);
  for (const name of ['app.js', 'catalog.js', 'watch.js', 'notes.js', 'discovery.js']) {
    code[name] = routeLinks(code[name]);
  }
  code['signup.js'] = code['signup.js']
    .replace("!location.pathname.endsWith('/signin.html')", "params.get('page') !== 'signin'")
    .replace("(signup ? 'signin.html' : 'signup.html') + '?next='", "'index.html?page=' + (signup ? 'signin' : 'signup') + '&next='");
  code['supabaseClient.js'] = routeLinks(code['supabaseClient.js'])
    .replace("url.pathname === new URL('index.html?page=watch', location.href).pathname", "url.pathname === new URL('index.html', location.href).pathname && url.searchParams.get('page') === 'watch'")
    .replace("location.pathname.endsWith('/watch.html')", "new URLSearchParams(location.search).get('page') === 'watch'")
    .replace("url.pathname + '?next='", "url.pathname + '?page=signin&next='");

  const assetPattern = /assets\/[\w/.-]+\.(?:png|svg|ttf)/g;
  const embedAssets = text => text.replace(assetPattern, asset => assets[asset] || asset);
  const scriptText = text => embedAssets(text).replace(/<\/script/gi, '<\\/script');

  // Shriftlar bir marta yoziladi; sahifa CSSlarida takrorlanmaydi.
  const fontFaces = [];
  const cssCache = new Map();
  const cssText = name => {
    if (!cssCache.has(name)) {
      cssCache.set(name, code[name].replace(/@font-face\s*\{[^}]*\}/gi, block => {
        fontFaces.push(embedAssets(block));
        return '';
      }));
    }
    return cssCache.get(name);
  };

  // Har bir sahifaning sarlavhasi, body klassi, ichki HTML'i va resurslari.
  const routeData = {};
  for (const route of ROUTES) {
    const html = code[route + '.html'];
    const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [, 'Hamkema'])[1];
    const bodyTag = (html.match(/<body([^>]*)>/i) || [, ''])[1];
    const bodyClass = (bodyTag.match(/class="([^"]*)"/i) || [, ''])[1];
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const body = (bodyMatch ? bodyMatch[1] : '')
      .replace(/<script src="[^"]+" defer><\/script>/gi, '')
      .replace(/<link rel="stylesheet" href="[^"]+">/gi, '')
      .replace(/src="(assets\/[\w/.-]+\.(?:png|svg|ttf))"/g, 'data-asset="$1"');
    const styles = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)">/gi)]
      .map(match => match[1]).filter(name => code[name] && name.endsWith('.css'));
    const scripts = [...html.matchAll(/<script src="([^"]+)" defer><\/script>/gi)]
      .map(match => match[1]).filter(name => code[name]);
    routeData[route] = { title, bodyClass, body, styles, scripts };
  }

  // Qaysi script qaysi sahifalarda ishlatilishini aniqlaymiz (bir nusxa yetarli).
  const members = new Map();
  for (const route of ROUTES) {
    for (const name of routeData[route].scripts) {
      if (!members.has(name)) members.set(name, new Set());
      members.get(name).add(route);
    }
  }
  const usedScripts = JS_ORDER.filter(name => members.has(name));
  for (const name of members.keys()) {
    if (!usedScripts.includes(name)) throw new Error('Script tartibda yo‘q: ' + name);
  }

  const styleBlocks = [{ attr: ' id="hamkema-fonts"', text: fontFaces.join('\n') }];
  for (const route of ROUTES) {
    styleBlocks.push({
      attr: ' id="css-' + route + '" data-page="' + route + '" disabled',
      text: routeData[route].styles.map(name => embedAssets(cssText(name))).join('\n')
    });
  }
  // google-fonts.css arxivda qoladi: u tashqi manbaga murojaat qilgani uchun
  // yagona faylga kiritilmaydi (asosiy shriftlar mahalliy @font-face orqali ishlaydi).

  const scriptBlocks = [
    { text: 'var HAMKEMA_ASSETS = ' + JSON.stringify(assets) + ';' },
    { text: ROUTER }
  ];
  for (const name of usedScripts) {
    const routes = [...members.get(name)];
    const test = routes.length === 1
      ? "window.__hamkemaPage === '" + routes[0] + "'"
      : '[' + routes.map(route => "'" + route + "'").join(', ') + '].includes(window.__hamkemaPage)';
    scriptBlocks.push({ text: 'if (' + test + ') {\n' + scriptText(code[name]) + '\n}' });
  }

  const digest = text => "'sha256-" + createHash('sha256').update(text).digest('base64') + "'";
  const scriptHashes = scriptBlocks.map(block => digest(block.text));
  const styleHashes = styleBlocks.map(block => digest(block.text));
  const csp = "default-src 'none'; script-src " + scriptHashes.join(' ') + "; style-src " + styleHashes.join(' ')
    + "; img-src data:; font-src data:; connect-src 'self' https://*.supabase.co; frame-src https://www.youtube-nocookie.com; object-src 'none'; base-uri 'none'; form-action 'self'; frame-ancestors 'self'";
  const metaCsp = csp.replace("; frame-ancestors 'self'", '').replace(/"/g, '&quot;');

  let output = '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<meta http-equiv="Content-Security-Policy" content="' + metaCsp + '">'
    + '<title>Hamkema</title>'
    + '<link rel="icon" href="' + (assets['assets/hamkema-mark.svg'] || '') + '" type="image/svg+xml">\n';
  for (const block of styleBlocks) output += '<style' + block.attr + '>' + block.text + '</style>\n';
  output += '</head><body>\n<noscript>Enable JavaScript to use Hamkema.</noscript>\n';
  for (const route of ROUTES) {
    const data = routeData[route];
    output += '<template id="page-' + route + '" data-title="' + attribute(data.title)
      + '" data-body="' + attribute(data.bodyClass) + '">' + data.body + '</template>\n';
  }
  output += '<div id="hamkema-app"></div>\n';
  for (const block of scriptBlocks) output += '<script>' + block.text + '</script>\n';
  output += '</body></html>\n';

  const target = path.join(root, 'index.html');
  if (write) fs.writeFileSync(target, output);
  return {
    target, output, csp, pages, routes: ROUTES,
    bytes: Buffer.byteLength(output),
    scripts: usedScripts.length,
    styles: new Set(ROUTES.flatMap(route => routeData[route].styles)).size,
    assets: Object.keys(assets).length
  };
}

if (require.main === module) {
  const { output, ...summary } = buildSingleFile();
  console.log(JSON.stringify({ ...summary, csp: 'SHA-256 hashes for inline scripts and styles' }, null, 2));
}
module.exports = { buildSingleFile };
