const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        app:'./app.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
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
                exclude: /node_modules/,
                use: [
                    {
                        loader:'babel-loader',
                    }
                ]
            },
            {
                test: /\.(ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //this is optional for keeping the name
                            name: '[name].[ext]',
                            outputPath: 'public/',
                            publicPath: 'public/'
                        }
                    }
                ]
            },
        ]
    }
}