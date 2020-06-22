# webpack_doc

####html-webpack-plugin
1.为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
2.可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口

minifyJS:压缩html内的javascript脚本，引入的js不会被压缩
