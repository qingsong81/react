var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: "eval-source-map",
    entry: __dirname+"/client/app.jsx",
    module:{
        loaders:[
            {
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                    presets: ["react","es2015"],
                    plugins:["react-html-attrs"]
                }
            },
            {
                test: /\.css$/,
                //use: [
                //    { loader: "style-loader" },
                //    { loader: "css-loader" }
                //]
                loader: 'style-loader!css-loader'
                //loader:"style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]"

            }
        ]
    },
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js"
    }
}