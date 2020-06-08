/**
 * 代码分离测试
 */

// entry: {
//     index: './src/index.js',
//         codeSplit: './js/codeSplit.js'
// },

// optimization: {
//     splitChunks: {
//         cacheGroups: {
//             commons: {
//                 name: "commons",
//                     chunks: "initial",
//                     minChunks: 2
//             }
//         }
//     }
// },

import _ from 'lodash';

/**
 * 111111111
 */
console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
);
