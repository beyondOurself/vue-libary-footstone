const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

process.env.NODE_ENV = 'development';

module.exports = merge(common, {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules:[
            { //加载less
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: "css-loader"

                    },
                    {
                        loader: "postcss-loader"

                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            { //加载scss
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // 你也可以从一个文件读取，例如 `variables.scss`
                            // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
                            prependData: `$color: red;`
                        }
                    },
                   
                ]
            },
            { //加载css
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        /**HMR */
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        })
    ],
    mode: "development"
});