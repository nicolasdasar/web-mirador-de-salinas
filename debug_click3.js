const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('file://' + __dirname + '/index.html');
    await page.waitForSelector('.unit-card');
    
    // override to verify execution
    await page.evaluate(() => {
        const oldOpenPrice = window.openPriceModal;
        window.openPriceModal = function(id) {
            console.log('openPriceModal called! id:', id);
            oldOpenPrice(id);
        };
    });
    
    await page.click('#unit-1 .price-btn');
    await new Promise(r => setTimeout(r, 500));
    
    const activeModals = await page.evaluate(() => {
        return document.querySelectorAll('.modal-overlay.active').length;
    });
    console.log('Active modals count:', activeModals);
    
    const priceName = await page.evaluate(() => document.getElementById('modal-price-name').textContent);
    console.log('Price Name text:', priceName);
    
    await browser.close();
})();
