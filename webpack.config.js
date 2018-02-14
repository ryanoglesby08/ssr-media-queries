const path = require("path");

const nodeModules = path.resolve("./node_modules");

module.exports = {
  entry: path.resolve("./src/client.js"),
  output: {
    path: path.resolve("./dist"),
    filename: "app.bundle.js"
  },
  // devServer: {
  //   contentBase: './dist'
  // },
  module: {
    rules: [
      {test: /\.js$/, use: "babel-loader", exclude: nodeModules},
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  }
};
