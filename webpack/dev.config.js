import { merge } from "webpack-merge"

import { baseConfig } from "./base.config"

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist",
    host: "0.0.0.0",
    port: 3000
  }
}

export const config = merge(baseConfig, devConfig);
