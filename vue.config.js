const buildConfig = require("./build");

/**
 * 配置参考
 * @see https://cli.vuejs.org/config/
 */
const vueConfig = {
  // 根目录
  publicPath: buildConfig.baseUrl,
  // 生产环境不生成sourcemap
  productionSourceMap: false,
  runtimeCompiler: false,
  // 测试不需要hash，线上用hash
  filenameHashing: buildConfig.filenameHashing,
  // 输出目录
  outputDir: buildConfig.outputDir,
  // 静态资源目录，相对于outputDir
  assetsDir: buildConfig.assetsDir,
  // 入口配置
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: buildConfig.applicationName || "应用名",
    },
  },
  // 开发服务器配置
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    // 代理
    // proxy: {},
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch-index").delete("preload-index");
  },
  // webpack配置
  configureWebpack: buildConfig.webpackConfig,
};

module.exports = vueConfig;
