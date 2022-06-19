const path = require('path');
const  webpack  = require('webpack');
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        chunkFilename: '[name].bundle.[fullhash].js'

    },
    devServer: {
        port: 3010,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    

                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|pdf)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader?limit=100000'
                }
            },
            {
                test: /\.node$/,
                loader: "node-loader",
              },
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin()
    ],
}