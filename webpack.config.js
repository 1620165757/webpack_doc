const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        codeSplit: './js/codeSplit.js'
    },
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management1',
            filename: 'main.html',
            template: './public/index.html',
            minify: {
                removeComments: true, // 清理html中的注释。
                removeEmptyElements: true,//清理内容为空的元素
                collapseWhitespace: true, // 清理html中的空格、换行符
                removeAttributeQuotes: false, // 改为false
                minifyJS: true,
            }
        }),
        new CleanWebpackPlugin(['dist']),
        //
        // /**
        //  * 防止vendor.js的hash发生变化
        //  */
        // new webpack.HashedModuleIdsPlugin(),
        //
        // /**
        //  *
        //  */
        // new webpack.ProvidePlugin({
        //     //全局使用_,不用在import lodash
        //     // _: 'lodash',
        //     //全局使用join,不用在 _.join
        //     join: ['lodash', 'join']
        // }),
        //
        // /**
        //  *
        //  */
        // new WorkboxPlugin.GenerateSW({
        //     // 这些选项帮助 ServiceWorkers 快速启用
        //     // 不允许遗留任何“旧的” ServiceWorkers
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
    ],

    /**
     * 代码分离
     */
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(png|svg|jpg|gif|jpeg)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(csv|tsv)$/,
    //             use: [
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         },
    //         // {
    //         //     test: require.resolve('./src/index.js'),
    //         //     use: 'imports-loader?this=>window'
    //         // },
    //         {
    //             test: require.resolve('./src/globals.js'),
    //             use: 'exports-loader?file,parse=helpers.parse'
    //         },
    //         {
    //             test: /\.tsx?$/,
    //             use: 'ts-loader',
    //             exclude: /node_modules/
    //         }
    //     ]
    // },
    // resolve: {
    //     extensions: [ '.tsx', '.ts', '.js' ]
    // },
};
