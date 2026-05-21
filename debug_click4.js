const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    
    await page.goto('file://' + __dirname + '/index.html');
    await page.waitForSelector('.unit-card');
    
    const clickResult = await page.evaluate(() => {
        let btn = document.querySelector('#unit-1 .price-btn');
        let clicked = false;
        btn.addEventListener('click', () => { clicked = true; });
        btn.click();
        return clicked;
    });
    
    console.log('Button clicked:', clickResult);
    
    const hasActive = await page.evaluate(() => {
        return document.querySelectorAll('.modal-overlay.active').length;
    });
    console.log('Active modals:', hasActive);
    
    await browser.close();
})();
