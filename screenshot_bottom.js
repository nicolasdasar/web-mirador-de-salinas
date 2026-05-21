const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('file://' + __dirname + '/index.html');
    
    // Scroll to bottom
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'bottom.png', fullPage: true });
    
    await browser.close();
})();
