const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    
    await page.goto('file://' + __dirname + '/index.html');
    
    console.log('Page loaded. Clicking first unit...');
    await page.waitForSelector('.unit-card');
    
    // Click price
    await page.click('#unit-1 .btn-ver:nth-child(1)');
    console.log('Clicked Consultar Precio');
    
    // Click plan
    await page.click('#unit-1 .btn-ver:nth-child(2)');
    console.log('Clicked Ver Plano');
    
    await browser.close();
})();
