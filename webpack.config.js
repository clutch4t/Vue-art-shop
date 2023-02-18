const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        filename: '[name].[contenthash].bundle.js',
        asyncChunks: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader: 'vue-loader'
            },
            {
                test: /\.s[ac]ss?/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.js$/i,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext]',
                }
            },
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}