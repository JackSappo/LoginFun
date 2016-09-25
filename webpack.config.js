var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/router'
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      }
    ]
  }
}
