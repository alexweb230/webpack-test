const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {

    context: path.resolve(__dirname, 'src'),

    mode: 'development',

    entry: {
        main: './index.js',
        analytics: './analitics.js'

    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.json', '.png', '.css'],
        alias: {
          '@models': path.resolve(__dirname, 'src/models'),
           '@': path.resolve(__dirname, 'src')
        }
    },

    plugins: [
       new htmlWebpackPlugin({
           template: './index.html'
       }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use:['file-loader']
            }
        ]
    }

}
