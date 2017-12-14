var path = require('path');
var webpack = require('webpack');

var config = require('./config');

var entry = [
    './src/assets/js/index.js'
]

var plugins = [
    new webpack.optimize.UglifyJsPlugin()
]

module.exports = {
    devtool: 'source-map',
    entry: config.entry,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: '/node_modules/'
            },
        ]
    },
    plugins: plugins,
    output: {
        path: path.join(__dirname, '/dist/assets/js/'),
        publicPath: '/dist/assets/js/',
        filename: 'bundle.js'
    }
}