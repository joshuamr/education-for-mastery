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
        home: './public/js/main.js',
        contact: './public/js/contact.js',
        about: './public/js/about.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
                            hmr: process.env.NODE_ENV === 'development',
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
                test: /\.(jpg|png|JPG|PNG)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //this is optional for keeping the name
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //this is optional for keeping the name
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new HtmlWebpackPlugin({
          filename: 'views/home.pug',
          template: 'views/home.pug',
          chunks: ['home']
      }),
      new HtmlWebpackPlugin({
            filename: 'views/contact.pug',
            template: 'views/contact.pug',
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            filename: 'views/about.pug',
            template: 'views/about.pug',
            chunks: ['about']
        }),
        // new HtmlWebpackPugPlugin(),
    ],
}