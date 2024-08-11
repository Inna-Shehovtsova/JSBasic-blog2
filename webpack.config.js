const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
// ...

// https://www.npmjs.com/package/browser-sync-webpack-plugin

module.exports = {
  entry: "./src/index.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "src/css"),
    },
    compress: true,
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "src/page.html",
      filename: "page.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/chat.html",
      filename: "chat.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        //{ from: path.resolve(__dirname, "src/img"), to: "img" },
        { from: path.resolve(__dirname, "src/css"), to: "css" },
      ],
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development
      host: "localhost",
      port: 3000,
      // proxy the Webpack Dev Server endpoint
      // (which should be serving on http://localhost:3100/)
      // through BrowserSync
      proxy: "http://localhost:9000/",
    }),
  ],

  // webpack.config.js
  module: {
    rules: [
      {
        // https://webpack.js.org/loaders/css-loader/
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
