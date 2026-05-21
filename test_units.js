const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('file://' + __dirname + '/index.html');
    await page.waitForSelector('.unit-card');
    
    const html = await page.evaluate(() => document.getElementById('unit-1').outerHTML);
    console.log(html);
    
    await browser.close();
})();
