const express = require('express')

const app = express()
// 注意错误级别的中间件，其他中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的JSON格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    // 在服务器可以使用req.body这个属性来接收客户端发送过来的请求体数据
    console.log(req.body);
    res.send('User Page')
})
app.post('/book', (req, res) => {
    // 在服务器端，可以通过 req.body 来获取JSON格式的表单数据和 url-encoded 格式数据
    console.log(req.body);
})

app.listen(80, (req, res) => {
    console.log('express server running at http://127.0.0.1');
})