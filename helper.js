const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports = async function upload() {
    console.log('Upload file start')
    const params = {
        Bucket: 'tesing-zoom-api-integration-vietis-s3bucket-2w1m7vdsx1dd',
        Key: `test_file/s3-${Date.now()}.txt`,
        Body: `Hello, world! ${Date.now()}`,
      };
      
    s3.putObject(params, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
        }
    });
    await Promise.resolve();
    return true;
}