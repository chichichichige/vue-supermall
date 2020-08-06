module.exports = {
  configureWebpack: {
    resolve: {
      //配置别名
      alias: {
        // '@':'src' vue已经配置好了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}