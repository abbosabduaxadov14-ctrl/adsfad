const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const root = path.resolve(__dirname, '..');
(async () => {
  const child = spawn(process.execPath, ['--inspect-brk=127.0.0.1:0', path.join(root, 'serve.cjs')], { cwd: root, env: { ...process.env, PORT: '4180' }, stdio: ['ignore', 'pipe', 'pipe'] });
  const ready = new Promise(resolve => { child.stdout.on('data', part => { if (String(part).includes('Hamkema: http://127.0.0.1:4180')) resolve(); }); });
  let socket;
  const timeout = setTimeout(() => { child.kill(); throw new Error('Debugger verification timed out'); }, 20000);
  try {
    const address = await new Promise((resolve, reject) => { let output = ''; child.on('error', reject); child.stderr.on('data', part => { output += part; const found = output.match(/ws:\/\/127\.0\.0\.1:\d+\/[\w-]+/); if (found) resolve(found[0]); }); child.on('exit', code => reject(new Error('Debuggee exited: ' + code))); });
    socket = new WebSocket(address); await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once:true }); socket.addEventListener('error', reject, { once:true }); });
    let sequence = 0; const replies = new Map(), pauses = []; let pauseResolve;
    socket.addEventListener('message', event => { const message = JSON.parse(event.data); if (message.id) { const pending = replies.get(message.id); if (pending) { replies.delete(message.id); message.error ? pending.reject(new Error(message.error.message)) : pending.resolve(message.result); } } if (message.method === 'Debugger.paused') { if (pauseResolve) { const resolve = pauseResolve; pauseResolve = null; resolve(message.params); } else pauses.push(message.params); } });
    const rpc = (method, params = {}) => new Promise((resolve, reject) => { const id = ++sequence; replies.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })); });
    const pause = () => pauses.length ? Promise.resolve(pauses.shift()) : new Promise(resolve => { pauseResolve = resolve; });
    await rpc('Runtime.enable'); await rpc('Debugger.enable');
    const target = fs.readFileSync(path.join(root, 'serve.cjs'), 'utf8').split('\n').findIndex(line => line.includes('const cache = new Map'));
    await rpc('Debugger.setBreakpointByUrl', { lineNumber: target, urlRegex: 'serve\\.cjs$' });
    await rpc('Runtime.runIfWaitingForDebugger'); await pause(); await rpc('Debugger.resume'); const hit = await pause();
    assert.equal(hit.callFrames[0].location.lineNumber, target); await rpc('Debugger.resume');
    await ready; const response = await fetch('http://127.0.0.1:4180'); assert.equal(response.status, 200);
    console.log('PASS: debug runtime connects, pauses at a real serve.cjs breakpoint, resumes and serves the website on the configured debug port 4180.');
  } finally { clearTimeout(timeout); if (socket) socket.close(); child.kill(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
