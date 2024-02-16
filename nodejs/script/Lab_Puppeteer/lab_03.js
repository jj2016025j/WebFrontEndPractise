const puppeteer = require('puppeteer');

// function delay(time) {
//     return new Promise(function(resolve) { 
//         setTimeout(resolve, time)
//     });
// }

async function main () {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto('https://en.wikipedia.org/wiki/Wiki', {waitUntil: 'networkidle2'});
    await page.focus("input[name='search']");
    await page.keyboard.type('earth');
    //await delay(1000);
    //await page.keyboard.press('\n');
    (await page.$("#searchform button")).click();
}

main();