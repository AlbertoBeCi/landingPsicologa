// Script de minificación básica de CSS (sin dependencias externas)
// Genera css/styles.min.css a partir de css/styles.css
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'css', 'styles.css');
const outPath = path.join(__dirname, '..', 'css', 'styles.min.css');

let css = fs.readFileSync(srcPath, 'utf8');

// 1. Eliminar comentarios
css = css.replace(/\/\*[\s\S]*?\*\//g, '');

// 2. Compactar saltos de línea y espacios múltiples
css = css.replace(/\n+/g, ' ');
css = css.replace(/[ \t]+/g, ' ');

// 3. Ajustar espacios dentro de reglas y bloques
css = css.replace(/ ?([{}:;,>~]) ?/g, '$1');
css = css.replace(/ ?\+ ?/g, '+');

// 4. Eliminar espacios alrededor de paréntesis (formas rgba, calc...)
css = css.replace(/ ?\( ?/g, '(').replace(/ ?\) ?/g, ')');

// 5. Limpiar espacios residuales dobles
css = css.replace(/ {2,}/g, ' ');

// 6. Punto y coma final opcional antes de llave
css = css.replace(/;}/g, '}');

// 7. Espacios finales
css = css.trim();

fs.writeFileSync(outPath, css, 'utf8');

const original = fs.statSync(srcPath).size;
const minified = fs.statSync(outPath).size;
const saved = ((1 - minified / original) * 100).toFixed(1);

console.log(`CSS original:    ${original} bytes (${(original/1024).toFixed(2)} KB)`);
console.log(`CSS minificado:  ${minified} bytes (${(minified/1024).toFixed(2)} KB)`);
console.log(`Reducción:       ${saved}%`);
