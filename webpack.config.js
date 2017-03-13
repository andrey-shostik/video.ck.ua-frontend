var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.js'
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
        loaders: ['react-hot', 'babel-loader'],
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
    historyApiFallback: true,
    port: 3000
  }
};
