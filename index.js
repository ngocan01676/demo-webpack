console.log('Running');
const up = require('./dist/bundle');
const renderPdf = require('./aws-bundle.js/main')

(async function() {
    //await up();
    const buffer = await renderPdf("<h1>Success</h1>");
    console.log(buffer);
})()