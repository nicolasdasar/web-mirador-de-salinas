const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('id="modal-price-name"')) console.log('MISSING modal-price-name');
if (!html.includes('id="modal-price-value"')) console.log('MISSING modal-price-value');
if (!html.includes('id="price-modal"')) console.log('MISSING price-modal');
if (!html.includes('id="plan-modal"')) console.log('MISSING plan-modal');
if (!html.includes('id="modal-plan-img"')) console.log('MISSING modal-plan-img');
console.log('HTML check complete.');
