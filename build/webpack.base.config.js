const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    module: {
        rules: [
            { //vue
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { // 加载babel
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: file => ( //确保 JS 的转译应用到 node_modules 的 Vue 单文件组件
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            }
            ,
            { //加载less
                test: /\.less$/,
                use: [
                    'vue-style-loader',
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
                    'vue-style-loader',
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
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            },
            { //加载图片
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            { //加载字体
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            { //加载数据
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
            }

        ]
    },
    plugins: [
        //替换 html的插件
        new HtmlWebpackPlugin({
            title: '',
            template: path.resolve(__dirname, '../index.html'),
        }),
        //清除 /dist 文件夹
        new CleanWebpackPlugin({}),
        // .vue文件处理插件
        new VueLoaderPlugin()
    ]
}