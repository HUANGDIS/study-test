const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})
module.exports = {
  mode: 'development',
  plugins: [htmlPlugin],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {test: /\.jpg|png|gig|bmp|ttf|eot/, use: 'url-loader?limit=16940'},
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ],
  },
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  }
}