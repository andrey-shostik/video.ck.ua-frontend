var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'main.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  devtool: 'source-map',
  debug: true,
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/main.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    port: 3000,
    colors: true,
    historyApiFallback:{
      index:'index.html'
    },
  },
};
