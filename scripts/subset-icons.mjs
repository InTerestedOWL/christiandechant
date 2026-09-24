// Builds a Material Symbols font that only contains the icons used in src/.
// Run after adding a new icon:  npm run icons
// The download only happens on the developer machine; visitors get the self-hosted file.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const SRC = 'src';
const OUT = 'src/app/fonts/material-symbols-subset.woff2';
// Always keep a few fallbacks that are rendered dynamically.
const EXTRA = [ 'error' ];

async function* files(dir) {
  for ( const entry of await readdir(dir, { withFileTypes: true }) ) {
    const path = join(dir, entry.name);
    if ( entry.isDirectory() ) yield* files(path);
    else if ( /\.(tsx?|mjs)$/.test(entry.name) ) yield path;
  }
}

// Matches name="icon", icon="icon" and icon: 'icon' (content files).
const pattern = /\b(?:name|icon)\s*[=:]\s*["']([a-z0-9_]+)["']/g;
const icons = new Set(EXTRA);
for await ( const file of files(SRC) ) {
  for ( const match of ( await readFile(file, 'utf8') ).matchAll(pattern) ) icons.add(match[1]);
}
const names = [ ...icons ].sort();

const cssUrl = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0'
  + `&icon_names=${ names.join(',') }&display=block`;
const css = await ( await fetch(cssUrl, {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36' },
}) ).text();
const fontUrl = css.match(/url\((https:[^)]+)\)/)?.[1];
if ( !fontUrl ) throw new Error(`No font URL in response:\n${ css }`);

const font = Buffer.from(await ( await fetch(fontUrl) ).arrayBuffer());
await writeFile(OUT, font);
console.log(`${ names.length } icons -> ${ OUT } (${ ( font.length / 1024 ).toFixed(1) } KB)\n${ names.join(' ') }`);
