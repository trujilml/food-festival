const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = { entry: './assets/js/script.js', 
                   output: {
                       path: __dirname + '/dist',
                       filename: '[name].bundle.js'
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
                   entry: {
                     app: "./assets/js/script.js",
                     events: "./assets/js/events.js",
                     schedule: "./assets/js/schedule.js",
                     tickets: "./assets/js/tickets.js"
                   }
                 };