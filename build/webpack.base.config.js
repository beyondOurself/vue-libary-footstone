const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                     {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }
                    
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: path.resolve(__dirname, '../index.html'),
        }),
        new CleanWebpackPlugin({}),
        new VueLoaderPlugin()
    ]
}