// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CriticalCssPlugin = require("critical-css-webpack-plugin");

// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import pkg from "html-inline-css-webpack-plugin";
// import { fileURLToPath } from "url";
// const { default: HTMLInlineCSSWebpackPlugin } = pkg
// console.log(HTMLInlineCSSWebpackPlugin)

// const __filenameNew = fileURLToPath(import.meta.url);
// const __dirnameNew = path.dirname(__filenameNew);

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[contenthash].js",
    chunkFilename: "[id]-[contenthash].js",
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  /* optimization: {
    splitChunks: {
      name: false,
      cacheGroups: {
        commons: {
          name: "common",
          chunks: "all",
          minChunks: 2,
          priority: 10,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          priority: -10,
        },
      },
    },
    runtimeChunk: true,
  }, */
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      // name: false,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
        utilities: {
          test: /[\\/]utils[\\/]/,
          name: "utilities",
          chunks: "all",
          priority: 0,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        // css: {
        //   name: "css",
        //   test: /\.scss$/,
        //   minChunks: 1,
        //   enforce: true,
        // }
      },
    },
    runtimeChunk: true,
  },
  // optimization: {
  //   splitChunks: {
  // 		minSize: 0 // This example is too small, in practice you can use the defaults
  // 	},
  // 	chunkIds: "deterministic"
  //   // splitChunks: {
  //   //   chunks: 'all',
  //   //   minChunks: 1,
  //   //   cacheGroups: {
  //   //     styles: {
  //   //       name: 'ultra-special-styles',
  //   //       test: /c\.css$/,
  //   //       chunks: 'all',
  //   //       enforce: true
  //   //     }
  //   //   }
  //   // }
  // },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "[name].css",
      chunkFilename: "[name]-[id]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CleanWebpackPlugin(),
    new CriticalCssPlugin({
      src: "index.html",
      target: "index.html",
    }),
    // new HTMLInlineCSSWebpackPlugin({
    //   filter(fileName) {
    //     console.log(fileName, ...arguments, "-----");
    //     return false;
    //   },
    // }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
