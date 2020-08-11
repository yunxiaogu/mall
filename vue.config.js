module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 默认会有'@': 'src'
        // '@': 'src',

        // 可以使用@
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'


        // 可以收用路径全称
        // 'common': '.rc/common',
        // 'components': 'src/components',
        // 'network': 'src/network',
        // 'assets': 'src/assets'
      }
    }
  },
  devServer: {
    // open: false, //是否自动弹出浏览器页面
    // host: "localhost",
    // port: '8080',
    // https: false, //是否使用https协议
    // hotOnly: false, //是否开启热更新
    // proxy: {
    //   '/goodbook': {
    //     // target: 'http://apis.juhe.cn/goodbook', //API服务器的地址
    //     tareget:
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/goodbook': ''
    //     }
    //   }
    // }
  }
}
