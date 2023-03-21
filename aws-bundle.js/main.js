/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const chromium = __webpack_require__(883);
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
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  try {
    const page = await browser.newPage();
    // await page.goto(event.url);
    // result = await page.content();
    await page.setContent(textHtml);
    const pdfResult = await page.pdf({
      format: 'A4'
    });
    await browser.close();
    return pdfResult;
  } finally {
    await browser.close();
  }
  return result;
};

/***/ }),

/***/ 883:
/***/ ((module) => {

"use strict";
module.exports = chrome-aws-lambda;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(658);
/******/ 	
/******/ })()
;