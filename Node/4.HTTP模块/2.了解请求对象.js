const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // req.url是客户端请求的 URL 地址
    const url = req.url;
    // req.method是客户端请求的 method 类型
    const method = req.method;
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str);
    // 为了防止中文显示乱码需要设置响应头Content-Type的值为 text/html;charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 调用res.end()方法，向客户端响应一些内容
    res.end(str);
});

server.listen(80, () => {
    console.log('Serve running at http://127.0.0.1');
})