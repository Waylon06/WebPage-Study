const http = require('http')
const { isAbsolute } = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
// 1.获取url地址
const url = req.url
// 2.设置默认的响应内容为 404 Not found
let content = '<h1>404 Not found </h1>'
// 3.判断用户请求的是否为 / 或 /indexedDB.html 首页
if(url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
}
// 4.判断用户请求的是否为 /about.html 关于页面
else if(url === '/about.html') {
    content = '<h1>关于页面</h1>'
}
// 5.设置Content-Type 响应头，防止中文乱码
res.setHeader('Content-Type', 'text/html; charset=utf-8');
// 6.使用res.end()把内容响应给客户端
res.end(content)
})

server.listen(80, () => {
    console.log('Serve running at http://127.0.0.1');
})