const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // 1.人为的制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home Page' + req.startTime)
})

// 2.定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
// 错误级别中间件一定要注册到所有路由之后
app.use(function(err, req, res, next) {
    console.log('发生了错误!' + err.message)
    res.send('Error:' + err.message)
})

app.listen(80, (req, res) => {
    console.log('express server running at http://127.0.0.1');
})