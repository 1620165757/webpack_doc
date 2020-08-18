const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  target: "web",
  entry: './src/index.js',
  output: {
    //输出目录
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'index.bundle.js',
    //在使用[hash]命名时使用的编码方式，默认hex
    hashDigest: 'hex',
    //[hash]的长度
    hashDigestLength: 20,
    //输出目录和开发目录的结构不同，通过设置publicPath解决问题
    // publicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序'
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};

export default config
