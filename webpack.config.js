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
