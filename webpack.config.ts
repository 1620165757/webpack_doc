const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  //绝对路径，可选，默认使用当前目录，指明entry入口的路径
  context: path.resolve('./src'),

  //可以为字符串，对象，数组，方法
  //字符串，chunk命名为main.bundle.js
  //数组，chunk命名为main.bundle.js
  //对象，chunk命名为[key].bundle.js
  entry: './index.js',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序'
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};

export default config
