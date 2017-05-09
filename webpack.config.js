'use strict'

const webpack = require('webpack');
const path = require('path');
var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModulesQuery = {
    modules: true,
    importLoaders: 1,
    localIdentName: '[name]-[local]-[hash:base64:5]'
};

module.exports = {
    context: __dirname + "/src",
    entry: [//'webpack-hot-middleware/client',
        './index.js'],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/assets"),
        publicPath: "/static"
    },
    resolve: {
        alias:{
          components: path.resolve(__dirname, 'src/components/'),
          containers: path.resolve(__dirname, 'src/containers/'),
          actions: path.resolve(__dirname, 'src/actions/'),
        },
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.(css|sass|scss)$/,
                loaders: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/src"),
        port: 3000
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin()
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        })
    ]
}
