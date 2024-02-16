const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.taipower.com.tw/TC/news2.aspx?mid=225', { waitUntil: 'networkidle2' });
    // 這行出錯
    // await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'})

    var dataList = await page.evaluate(() => {
        let result = [];
        const $ = window.$;
        let liList = $("#news_box3 > div.box_list > ul > li");
        liList.each(function (index, element) {
            var newsItem = {
                newsUrl: $(element).find("a").prop("href"),
                newsTitle: $(element).find("a div h3").text(),
                newsTime: $(element).find("a div span").text()
            };
            result.push(newsItem);
        })
        return result;
    })
    await browser.close();

    console.log(dataList);
}

main();
