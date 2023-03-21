// webpack.config.js

// const path = require('path');

// module.exports = {
//   target: 'node', // set the compilation target to node.js
//   entry: path.resolve(__dirname, 'convert_pdf.js'),
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     libraryTarget: 'commonjs2' // specify the output format as commonjs2
//   },
//   externals: [
//     //'aws-sdk', // Exclude AWS SDK from the bundle
//     ///^chrome-aws-lambda/ // Exclude all modules that start with "chrome-aws-lambda"
//   ],
//   mode: 'production'
// };

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



// Puppeteer bundle test



// const path = require('path');
// const slsw = require('serverless-webpack');

// module.exports = {
//   //entry: slsw.lib.entries,
//   entry: path.resolve(__dirname, 'convert_pdf.js'),
//   target: 'node',
//   mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
//   node: {
//     __dirname: true,
//   },
//   output: {
//     filename: '[name].js',
//     libraryTarget: 'commonjs2',
//     path: path.resolve(__dirname, '.webpack'),
//   },
//   resolve: {
//     alias: {
//       //'puppeteer-core$': 'puppeteer-core/lib/cjs/puppeteer/'
//       'puppeteer-core': path.resolve(__dirname, 'node_modules/puppeteer-core'),
//       'fs': false
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(html|png|jp(e*)g|gif)$/i,
//         use: {
//           loader: 'file-loader',
//         },
//       },
//       // Add this rule to load Puppeteer properly
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };


const path = require('path');
console.log(path.resolve(__dirname, './node_modules/chrome-aws-lambda'));
module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: {
    'chrome-aws-lambda': 'chrome-aws-lambda',
    puppeteer: 'puppeteer-core'
  },
  // externals: [
  //   'chrome-aws-lambda',
  //   'aws-sdk',
  //   'puppeteer-core', // Add this line to tell webpack not to bundle puppeteer-core
  // ],
  resolve: {
    alias: {
      // Use the precompiled version of Chrome for AWS Lambda
      'chrome-aws-lambda': path.resolve(__dirname, './node_modules/chrome-aws-lambda')
    }
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  optimization: {
    minimize: false // To avoid errors with `uglifyjs-webpack-plugin`.
  },
  mode: 'production',
  entry: path.resolve(__dirname, 'aws.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'aws-bundle.js'),
    //libraryTarget: 'commonjs2',
    //path: path.resolve(__dirname, '.webpack'),
  },
};