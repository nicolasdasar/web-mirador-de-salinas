const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('file://' + __dirname + '/index.html');
    
    await page.waitForSelector('.unit-card');
    await page.click('#unit-1 .unit-price button:nth-child(1)');
    
    await new Promise(r => setTimeout(r, 1000));
    const modalHTML = await page.evaluate(() => document.getElementById('price-modal').outerHTML);
    console.log(modalHTML);
    
    await browser.close();
})();
