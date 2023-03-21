const chromium = require('chrome-aws-lambda');

module.exports = async function convertPdf(textHtml) {
    try {
        const browser = await chromium.puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
        });
        const page = await browser.newPage();
        await page.setContent(textHtml);
        const pdfResult = await page.pdf({ format: 'A4' });
        await browser.close();
        return pdfResult;
    } catch (except) {
        throw new Error("Can't convert file to pdf");
    }
} 