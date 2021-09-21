import { Configuration } from 'webpack';
import path from 'path';
import webpackNodeExternals from "webpack-node-externals"

const BUILD_ROOT = path.join(__dirname, "../dist");
const SRC_ROOT = path.join(__dirname, "../src");

export const baseConfig: Configuration = {
  context: SRC_ROOT,
  entry: path.resolve("src", "index.ts"),
  externals: [webpackNodeExternals()],
  output: {
    filename: "server.js",
    path: BUILD_ROOT
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@": path.join(__dirname, "/src/")
    }
  }
};
