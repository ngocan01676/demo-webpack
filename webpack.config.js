// webpack.config.js

const path = require('path');

module.exports = {
  target: 'node', // set the compilation target to node.js
  entry: path.resolve(__dirname, 'helper.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2' // specify the output format as commonjs2
  },
  mode: 'production'
};

// const path = require('path');

// module.exports = {
//   target: 'node',
//   mode: 'production',
//   entry: './your-entry-file.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   externals: [
//     'aws-sdk', // Exclude AWS SDK from the bundle
//     /^chrome-aws-lambda/ // Exclude all modules that start with "chrome-aws-lambda"
//   ]
// };