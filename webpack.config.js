let path = require('path');
let nodeExternals = require('webpack-node-externals');
let htmlWebpackPlugin = require('html-webpack-plugin');

const moduleObj = {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    }],
};

const client = {
    entry: {
        'client': './src/client/index.js',
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/client/index.html'
        })
    ]
};

const server = {
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
}

module.exports = [client, server];