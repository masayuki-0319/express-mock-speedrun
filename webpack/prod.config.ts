import { Configuration } from 'webpack';
import { merge } from "webpack-merge"

import { baseConfig } from "./base.config"

const prodConfig: Configuration = {
  mode: "production"
};

const config = merge(baseConfig, prodConfig);

export default config;
