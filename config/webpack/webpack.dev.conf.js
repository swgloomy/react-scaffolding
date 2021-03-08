const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const opn = require('opn');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: './js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, '../../template.html'),
      filename: 'index.html',
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    after () {
      opn('http://localhost:' + this.port);
    }
  }
};