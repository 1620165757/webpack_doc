const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './build'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './publish/index.html',
            minify: {
                // collapseWhitespace: true,
                // removeComments: true,
                // removeRedundantAttributes: true,
                // removeScriptTypeAttributes: true,
                // removeStyleLinkTypeAttributes: true,
                // useShortDoctype: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/
                use: ''
            },
            {
                test: /\.css$/, use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                }, 'css-loader']
            }
        ]
    }
};
