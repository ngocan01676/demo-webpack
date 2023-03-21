const chromium = require('chrome-aws-lambda');
//const puppeteer = require('puppeteer-core');
// Set up Puppeteer to use Chrome
//const puppeter = require('puppeteer-core');

module.exports = async function awsPdfConvert(textHtml) {
    let result = null;

    //   const browser = await puppeteer.launch({
    //     args: chromium.args,
    //     executablePath: await chromium.executablePath,
    //     headless: chromium.headless,
    //     ignoreHTTPSErrors: true
    //   });
    // const browser = await chromium.puppeteer.launch({
    //     args: chromium.args,
    //     defaultViewport: chromium.defaultViewport,
    //     executablePath: await chromium.executablePath,
    //     headless: chromium.headless,
    //     ignoreHTTPSErrors: true,
    // });
    // const browser = await puppeter.launch({
    //     args: chrome.args,
    //     executablePath: await chrome.executablePath,
    //     headless: true,
    //   });
    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      });
      
      const page = await browser.newPage();
      await page.goto("https://www.example.com");

  try {
    const page = await browser.newPage();
    // await page.goto(event.url);
    // result = await page.content();
    await page.setContent(textHtml);
    const pdfResult = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdfResult;
  } finally {
    await browser.close();
  }

  return result;
};
