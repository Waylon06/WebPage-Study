const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 开启代理服务器(方式一)
  /* devServer: {
    //当public文件里有所要申请访问的文件就不会走代理
    proxy: 'http://localhost:5000'
  }, */
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      // 前缀有/api的都走代理（api这个名字可以改）
      '/api': {
        target: 'http://localhost:5000',
        // 将地址重写
        pathRewrite: {'^/api': ''},
        ws: true,  //用于websocket，websocket也是web和服务端通信的一种方式
        changeOrigin: true //用于控制请求头中的host值
      },
      '/waylon': {
        target: 'http://localhost:5001',
        // 将地址重写
        pathRewrite: {'^/waylon': ''},
        ws: true,  //用于websocket，websocket也是web和服务端通信的一种方式
        changeOrigin: true //用于控制请求头中的host值
      },
      /* '/foo': {
        target: '<other_url>'
      } */
    }
  }
})
