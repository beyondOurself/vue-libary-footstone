const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    module:{
        rules:[
            {}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '',
            template: path.resolve(__dirname, '../index.html'),
        }),
        new CleanWebpackPlugin({})
    ]
}