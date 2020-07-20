const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
  ],
};

export default config
