const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./client/src/index.jsx",
    output: {
        path: path.join(__dirname, 'client', 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: [
                    /\.jsx?$/, /\.js?$/
                ],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
