const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },

    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(jpeg|jpg|png|svg|wav|mp3)$/,
                use: ['file-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin('./public/assets/icon.svg'),
    ],
};
