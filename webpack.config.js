let path = require('path');

module.exports = {
   entry: './assets/js/index.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: './'
   },
}