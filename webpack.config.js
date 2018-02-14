const path = require("path");

const nodeModules = path.resolve("./node_modules");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve("./src/client.js"),
  output: {
    path: path.resolve("./dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {test: /\.js$/, use: "babel-loader", exclude: nodeModules},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
