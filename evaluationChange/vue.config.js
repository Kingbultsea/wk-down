const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // webpack 模块可视化工具

module.exports = {
  baseUrl: './', // /cosleep/teacher/    ./ https://webres.psy-1.com/sgy/dist
  assetsDir: './',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/globalscss/setSize.scss"; `
      }
    }
  },
  configureWebpack: { // webpack 配置
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
}
