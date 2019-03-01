const path = require("path");

module.exports = {
  entry: "./js/test.js",
  output: {
    filename: "test.js",
    library: "functions",
    libraryTarget: "this",
    path: path.resolve(__dirname, "Resources")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        }
      }
    ]
  }
};
