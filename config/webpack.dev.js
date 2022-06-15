const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); 
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
        // static: '../dist',
        // contentBase: path.resolve(__dirname, '../dist'),
        static: {
            directory: path.resolve(__dirname, '../dist')
        },
        compress: true,
        open: true,
        historyApiFallback: true,
        hot: true,
        port: 3000
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.css$/i,
                // use: [MiniCssExtractPlugin.loader, 'css-loader'],
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins :[
        new HtmlWebpackPlugin({
            title: 'webpack boilerplate',
            template: path.resolve(__dirname, '../src/template.html'),
            filename: 'index.html',
            myPageHeader: 'Header'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        // new CssMinimizerPlugin()
    ],
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new CssMinimizerPlugin()
    //     ]
    // }
}