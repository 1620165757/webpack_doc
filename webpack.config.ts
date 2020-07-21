const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // test: './src/test.ts'
  },
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].filename.[chunkhash].js',
    chunkFilename: '[name].chunkFilename.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // module: {
  //   rules: [{
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader']
  //   }]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序'
    }),
    new CleanWebpackPlugin(['dist']),
    // new webpack.ProvidePlugin({
    //   join: ['lodash', 'join']
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  }
};

export default config
