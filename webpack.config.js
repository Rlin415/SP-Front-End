"use strict";

const path = require('path');

module.exports = {
  entry: './client/app/app.js',
  output: {
     path: path.join(__dirname, 'client/dist'),
     filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: 'es2015'
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
};
