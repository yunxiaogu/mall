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
  }
}
