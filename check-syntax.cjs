const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const { publicFiles, frontendSource } = require(path.join(root, 'web-config.cjs'));
const scripts = [...publicFiles].filter(file => file.endsWith('.js')).map(frontendSource);
for (const file of scripts) new vm.Script(fs.readFileSync(path.join(root, file), 'utf8'), { filename: file });
console.log(`PASS: JavaScript syntax checked in all ${scripts.length} public scripts.`);
