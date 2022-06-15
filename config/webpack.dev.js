const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    plugins :[
        new HtmlWebpackPlugin({
            title: 'webpack boilerplate',
            template: path.resolve(__dirname, '../src/template.html'),
            filename: 'index.html',
            myPageHeader: 'Header'
        }),
        new CleanWebpackPlugin()
    ]
}