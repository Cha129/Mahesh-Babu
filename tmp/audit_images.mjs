import fs from 'fs';
import path from 'path';

const publicFiles = new Set();
function collectPublic(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) collectPublic(p);
    else publicFiles.add('/' + path.relative('public', p).replace(/\\/g, '/'));
  }
}
collectPublic('public');

console.log('--- ALL PUBLIC FILES ---');
console.log(Array.from(publicFiles).sort());

console.log('\n--- ALL IMAGE REFERENCES IN SRC ---');
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // match string literals ending with image extensions or starting with /assets or /posters or assets/
  const regex = /['"`]([^'"`\n]+\.(png|jpg|jpeg|webp|svg|gif))['"`]/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('http://') || url.startsWith('https://')) continue;
    const normUrl = url.startsWith('/') ? url : '/' + url;
    const exists = publicFiles.has(normUrl);
    console.log(`${filePath} -> "${url}" (normalized: "${normUrl}") => ${exists ? 'EXISTS' : '❌ MISSING'}`);
  }
}

function walkSrc(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walkSrc(p);
    else if (/\.(tsx?|jsx?|css|html)$/.test(f)) checkFile(p);
  }
}
walkSrc('src');
