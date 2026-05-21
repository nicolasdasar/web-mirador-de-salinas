const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('file://' + __dirname + '/index.html');
    await page.waitForSelector('.unit-card');
    
    await page.evaluate(() => {
        const oldOpenPrice = window.openPriceModal;
        window.openPriceModal = function(e, id) {
            console.log('openPriceModal called! id:', id);
            oldOpenPrice(e, id);
        };
        const oldOpenPlan = window.openPlanModal;
        window.openPlanModal = function(e, id) {
            console.log('openPlanModal called! id:', id);
            oldOpenPlan(e, id);
        };
    });
    
    await page.click('#unit-1 .unit-price button:nth-child(1)');
    await new Promise(r => setTimeout(r, 500));
    
    const planHTML = await page.evaluate(() => document.getElementById('plan-modal').outerHTML);
    console.log(planHTML);
    
    await browser.close();
})();
