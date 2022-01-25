const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = { entry: './assets/js/script.js', 
                   output: {
                       path: path.resolve(__dirname, 'dist'),
                       filename: 'main.bundle.js'
                   },
                   mode: 'development',
                   plugins: [
                     new webpack.ProvidePlugin({
                       $: "jquery",
                       jQuery: "jquery"
                     }),
                     new BundleAnalyzerPlugin({
                       analyzerMode: "static", //report outputs to a html file in the dist folder
                     })
                   ],
                 };