const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}
module.exports = {
    //进行webpack默认配置覆盖
    devServer:{
        port:5500,
        proxy:{
            '/app':{
                target: 'https://wap.xiaobaishixi.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/app': ''
                }
            },
            '/mz':{
                target: 'https://m.maizuo.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/mz': ''
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
            .set('@util', resolve('src/util'))
    }
}