const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack boilerplate',
            // add the favicon with path
            template: path.resolve(__dirname, '../src/template.html'),
            filename: 'index.html',
            myPageHeader: 'Header'
        }),
        new CleanWebpackPlugin(),
    ],
};