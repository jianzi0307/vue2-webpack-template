const TerserPlugin = require("terser-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const webpack = require('webpack')

const webpackConfig = (config) => {
  if (process.env.NODE_ENV === "production") {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            format: {
              comments: false,
            },
            output: {
              comments: false,
            },
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"],
            },
          },
          extractComments: false,
          test: /\.js(\?.*)?$/i,
        }),
      ],
    };

    // moment本地化只保留zh-cn
    // config.plugins.push(
    //   new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
    // )

    config.plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
          warnings: false,
        },
        sourceMap: false,
        parallel: true,
      })
    );

    // 启用gzip压缩，nginx配置gzip_static: on根据http请求优先返回gzip的文件
    // 服务器就不必消耗cpu来压缩资源
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
        // 对10K以上的数据进行压缩
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      })
    );

    // 进度
    config.plugins.push(new SimpleProgressWebpackPlugin());

    // 静态文件目录
    // config.plugins.push(
    //   new CopyWebpackPlugin({
    //     patterns: [{
    //       from: './static',
    //       to: 'static'
    //     }]
    //   })
    // )

    // 模块hash
    // config.plugins.push(
    //   new webpack.HashedModuleIdsPlugin({
    //     hashFunction: 'sha256',
    //     hashDigest: 'hex',
    //     hashDigestLength: 4
    //   })
    // )

    // 依赖分析
    // config.plugins.push(
    //   new BundleAnalyzerPlugin()
    // )
  }
};

module.exports = webpackConfig;
