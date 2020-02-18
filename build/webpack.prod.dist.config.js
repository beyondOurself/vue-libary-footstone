const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.base.config.js');

process.env.NODE_ENV = 'production';

module.exports = merge(common, {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    module: {
        rules:[
            { //加载less
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"

                    },
                    {
                        loader: "less-loader"
                    },
                    'postcss-loader'

                ]
            },
            { //加载scss
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // 你也可以从一个文件读取，例如 `variables.scss`
                            // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
                            prependData: `$color: red;`
                        }
                    },
                    'postcss-loader',
                ]
            },
            { //加载css
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //css 分离
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    mode: "production"
});