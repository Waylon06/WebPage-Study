const express = require('express')

const app = express()

// 挂载路由
app.get('/', (req, res) => {
    res.send('GET')
})

app.post('/', (req, res) => {
    res.send('POST')
}) 

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})