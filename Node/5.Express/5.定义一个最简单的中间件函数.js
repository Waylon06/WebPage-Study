const express = require('express')

const app = express()

// 定义一个最简单的中间件函数
const mw = function(req, res, next) {
    console.log('这是最简单的中间件');
    const time = Date.now()
    req.startTime = time
    // 把流转关系，转交给下一个中间件路由
    next()
}

app.use(mw)

app.get('/', (req, res) => {
    res.send('Home Page' + req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User Page')
})

app.listen(80, (req, res) => {
    console.log('express server running at http://127.0.0.1');
})