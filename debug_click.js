const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('file://' + __dirname + '/index.html');
    await page.waitForSelector('.unit-card');
    
    await page.evaluate(() => {
        window.openPriceModal = function(e, id) {
            console.log('openPriceModal called! id:', id);
            if (e) { e.preventDefault(); e.stopPropagation(); }
            const u = units.find(x => x.id === id);
            document.getElementById('modal-price-name').textContent = u.name;
            document.getElementById('modal-price-value').textContent = u.price;
            document.getElementById('price-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
    
    await page.click('#unit-1 .unit-price button:nth-child(1)');
    await new Promise(r => setTimeout(r, 500));
    const modalHTML = await page.evaluate(() => document.getElementById('price-modal').outerHTML);
    console.log(modalHTML);
    await browser.close();
})();
