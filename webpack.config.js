const path = require('path');

module.exports = {
   entry: './app/js/main.js',
   output: {
      filename: 'main.min.js',
      path: path.resolve(__dirname, 'app/js')
   },
   mode: 'production'
};