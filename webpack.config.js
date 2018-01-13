const path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: [
     'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './client/index.jsx'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loaders: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ["style-loader","css-loader","sass-loader"] }
    ]
  }
};