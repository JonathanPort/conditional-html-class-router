const path = require('path');

module.exports = {
  entry: './src/ConditionalHTMLClassRouter.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ConditionalHTMLClassRouter.js',
    libraryExport: 'default',
    libraryTarget: 'umd',
    library: 'ConditionalHTMLClassRouter'
  },
  module: {
  rules: [
    {
       use: {
          loader:'babel-loader',
          options: { presets: ['env'] }
       },
       test: /\.js$/,
       exclude: /node_modules/
    }
  ]
},

};