const express = require('express')

const app = express()

// 在这里，调用express.static()方法，快速对外提供静态资源
app.use(express.static('../案例-时钟'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})