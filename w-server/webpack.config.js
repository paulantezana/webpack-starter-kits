const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
// const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase : path.join(__dirname, "dist"),
        compress    : true,
        port        : 3000,
        open        : true,
        stats       : 'errors-only',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: true,
                            sourceMap: true,
                            // modules: true,
                            // localIdentName: '[local]__[hash:base64:5]',
                        }   
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
                })
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename    : 'index.html',
            minify      : {
                collapseWhitespace: false
            },
            hash        : true,
            template    : './src/index.html',
        })
    ]
};