$ErrorActionPreference = 'Stop'
$runtime = Join-Path $PSScriptRoot 'tools\runtime\node-current.exe'
if (-not (Test-Path -LiteralPath $runtime)) { $runtime = Join-Path $PSScriptRoot 'tools\runtime\node.exe' }
if (-not (Test-Path -LiteralPath $runtime)) { $runtime = Join-Path (Split-Path $PSScriptRoot -Parent) 'tools\runtime\node-current.exe' }
if (-not (Test-Path -LiteralPath $runtime)) {
    $installedNode = Get-Command node -ErrorAction SilentlyContinue
    if (-not $installedNode) { throw 'Node.js is missing. Install Node.js or restore tools/runtime/node.exe.' }
    $runtime = $installedNode.Source
}
# Use the same allowlist, response headers and HTTP behavior as the tested server.
& $runtime (Join-Path $PSScriptRoot 'serve.cjs')
exit $LASTEXITCODE
