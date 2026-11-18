const fs = require('node:fs');
const vm = require('node:vm');
const { frontendSource } = require('./web-config.cjs');
function publicConfig(root) {
  const scope = {}; vm.runInNewContext(fs.readFileSync(require('node:path').join(root, frontendSource('auth-config.js')), 'utf8'), scope, { timeout: 1000 });
  const config = { ...scope.hamkemaAuthConfig };
  if (process.env.SUPABASE_URL) config.url = process.env.SUPABASE_URL;
  if (process.env.SUPABASE_PUBLISHABLE_KEY) config.publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (config.publishableKey) {
    let valid = /^sb_publishable_[A-Za-z0-9_-]+$/.test(config.publishableKey);
    try { valid ||= JSON.parse(Buffer.from(config.publishableKey.split('.')[1], 'base64url')).role === 'anon'; } catch {}
    if (!valid) throw new Error('Only a Supabase publishable or legacy anon key may be sent to the browser.');
  }
  return config;
}
const configScript = config => 'globalThis.hamkemaAuthConfig = ' + JSON.stringify(config) + ';\n';
module.exports = { publicConfig, configScript };
