const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  // base: "/commodity-fair/",
  // publicPath: './',
  // assetsPublicPath: './',
  productionSourceMap: false,
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://sph-h5-api.atguigu.cn",
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
    },
  },
})