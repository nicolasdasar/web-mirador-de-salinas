const fs = require('fs');
const lines = fs.readFileSync('styles.css', 'utf8').split('\n');
let balance = 0;
for (let i = 0; i < lines.length; i++) {
    const open = (lines[i].match(/\{/g) || []).length;
    const close = (lines[i].match(/\}/g) || []).length;
    balance += open - close;
    if (balance < 0) {
        console.log(`Error: Extra closing brace at line ${i+1}`);
        balance = 0;
    }
}
if (balance > 0) {
    console.log(`Error: Missing ${balance} closing braces. Re-checking backwards to guess where...`);
}
