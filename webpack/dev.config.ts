import { Configuration } from 'webpack';
import { merge } from "webpack-merge"

import { baseConfig } from "./base.config"

const devConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    static: {
      directory: "dist",
    }
  }
};

const config = merge(baseConfig, devConfig);

export default config;
