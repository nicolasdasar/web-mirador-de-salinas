const fs = require('fs');
const css = fs.readFileSync('styles.css', 'utf8');

// Basic checks
let open = (css.match(/\{/g) || []).length;
let close = (css.match(/\}/g) || []).length;

console.log("Open braces:", open);
console.log("Close braces:", close);
