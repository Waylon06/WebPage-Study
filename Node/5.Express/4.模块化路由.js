const express = require('express')

const app =  express()

// 1.导入路由模块
const router = require('./4.1.routrer')

// 2.注册路由模块
app.use('/api', router)

// 注意: app.use()函数的作用就是来注册全局中间件

app.listen(80, (req, res) => {
    console.log('express server running at http://127.0.0.1');
})