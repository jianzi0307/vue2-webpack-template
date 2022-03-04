const webpackConfig = require("./webpack.config");

// .... 在这里进行其他相关设置

// console.log(webpackConfig, process.env.VUE_APP_BASE_URL,process.env.NODE_ENV, '<<<< webpackConfig')

module.exports = {
  applicationName: process.env.VUE_APP_APP_TITLE,
  baseUrl: process.env.VUE_APP_BASE_URL || '/',
  filenameHashing: process.env.FILE_NAME_HASHING,
  outputDir: process.env.VUE_APP_BUILD_OUTPUT_DIR,
  assetsDir: process.env.VUE_APP_ASSETS_DIR,
  webpackConfig,
};
