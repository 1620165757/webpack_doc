const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  // mode: 'development',
  mode: 'production',
  entry: {
    index: './src/index.js',
    // main: './src/main.js'
  },
  devtool: "cheap-module-source-map",
  output: {
    filename: '[name].[chunkhash].js',
    // chunkFilename: '[name].chunkFilename.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       sideEffects: true,
  //       oneOf: [
  //         {
  //           use: ['style-loader', 'css-loader'],
  //         }
  //       ]
  //     },
  //     {
  //       test: /\.(js|ts)$/,
  //       enforce: 'pre',
  //       loader: 'eslint-loader',
  //       // 指定检查的目录
  //       include: [path.resolve(__dirname, 'src')],
  //       //这里的配置项参数将会被传递到 eslint 的 CLIEngine
  //       options: {
  //         // 指定错误报告的格式规范
  //         // formatter: require('eslint-friendly-formatter'),
  //         cache: true,
  //       }
  //     },
  //     {
  //       test: /\.(js|ts)$/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     }
  //   ]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序',
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
    // new BundleAnalyzerPlugin()
  ],
  //
};

export default config
