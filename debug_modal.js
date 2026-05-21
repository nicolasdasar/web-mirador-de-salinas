const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('file://' + __dirname + '/index.html');
    
    await page.waitForSelector('.unit-card');
    
    // Click price
    await page.click('#unit-1 .unit-price button:nth-child(1)');
    console.log('Clicked Consultar Precio');
    
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'modal_price.png' });
    
    await page.click('.modal-close');
    console.log('Clicked close button');
    
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'modal_closed.png' });
    
    await browser.close();
})();
