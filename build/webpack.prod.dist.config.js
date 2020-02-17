const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.base.config.js');

module.exports = merge(common,{
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'../dist')
    },
    devtool: 'source-map',
    module:{

    },
    plugins:[
    ]
});