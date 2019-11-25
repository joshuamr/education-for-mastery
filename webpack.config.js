const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    entry: {
        app:'./app.js',
        home: './public/js/main.js',
        contact: './public/js/contact.js',
        about: './public/js/about.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: 'node',
    node:  {
        __dirname: false,
        __filename: false

    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader:'babel-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    'pug-loader'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //this is optional for keeping the name
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            },
        ]
    },
    
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin({
          filename: 'home.pug',
          template: 'views/home.pug',
          chunks: ['home']
      }),
      new HtmlWebpackPlugin({
            filename: 'contact.pug',
            template: 'views/contact.pug',
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.pug',
            template: 'views/about.pug',
            chunks: ['about']
        }),
        new HtmlWebpackPugPlugin(),
      new CleanWebpackPlugin()
    ],
}