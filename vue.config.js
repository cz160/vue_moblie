const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}
module.exports = {
    //进行webpack默认配置覆盖
    devServer:{
        port:3333,
        proxy:{
            '/home':{
                target: 'https://wap.xiaobaishixi.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/home': ''
                }
            }
        }
    },
    //设置别名
    chainWebpack(config){
        config
            .resolve
            .alias
            .set('@libs',resolve('src/libs'))
            .set('@pages', resolve('src/pages'))
            .set('@c', resolve('src/components'))
    }
}