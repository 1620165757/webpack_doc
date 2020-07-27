const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  // mode: 'production',
  entry: {
    index: './src/index.js',
    // main: './src/main.js'
  },
  devtool: false,
  output: {
    filename: '[name].[chunkhash].js',
    // chunkFilename: '[name].chunkFilename.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        sideEffects: true,
        oneOf: [
          {
            use: ['style-loader', 'css-loader'],
          }
        ]
      },
      {
        test: /\.(js|ts)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        // 指定检查的目录
        include: [path.resolve(__dirname, 'src')],
        //这里的配置项参数将会被传递到 eslint 的 CLIEngine
        options: {
          // 指定错误报告的格式规范
          // formatter: require('eslint-friendly-formatter'),
          cache: true,
        }
      },
      {
        test: /\.(js|ts)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序',
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    alias: {
      otherJs: path.resolve(__dirname, 'src/other/js')
    },
    descriptionFiles: ['package.json'],
    enforceExtension: false,
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts'],
    mainFields: ['browser', 'module', 'main', 'webpackMain'],
    modules: ['node_modules']
  },
  externals: 'echarts',
  optimization: {
    //是否启用TerserPlugin压缩bundle
    minimize: true,
    runtimeChunk: 'single',
    chunkIds: 'named',
    nodeEnv: 'production1',
    removeAvailableModules: true,
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 2,
      // cacheGroups: {
      //   common: {
      //     chunks: 'initial',
      //     name: 'common_chunk',
      //     test: /node_modules/,
      //     minSize: 0,
      //     minChunks: 1
      //   },
      //   asyncCommon: {
      //     chunks: 'async',
      //     name: 'async_common_chunk',
      //     test: /node_modules/,
      //     minSize: 0,
      //     minChunks: 1
      //   }
      // },
    }
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  //   runtimeChunk: {
  //     name: entrypoint => `runtime-${entrypoint.name}`,
  //   },
  // }
};

export default config
