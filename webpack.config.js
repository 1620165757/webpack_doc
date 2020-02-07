const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    // entry: {
    //     index: './src/index.js',
    //     // main: './src/math.js'
    // },
    entry: './src/index.ts',
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[contenthash].js',
        // /**
        //  * 非入口文件名，即动态导入的文件
        //  */
        // chunkFilename: '[name].bundle123.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['dist']),

        /**
         * 防止vendor.js的hash发生变化
         */
        new webpack.HashedModuleIdsPlugin(),

        /**
         *
         */
        new webpack.ProvidePlugin({
            //全局使用_,不用在import lodash
            // _: 'lodash',
            //全局使用join,不用在 _.join
            join: ['lodash', 'join']
        }),

        /**
         *
         */
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ],

    /**
     * 代码分离
     */
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: "async",// all async initial
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10 // 优先级
                },
                common: {
                    name: "common",
                    test: /[\\/]src[\\/]/,
                    minSize: 1024,
                    chunks: "all",
                    priority: 5
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            // {
            //     test: require.resolve('./src/index.js'),
            //     use: 'imports-loader?this=>window'
            // },
            {
                test: require.resolve('./src/globals.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
};
