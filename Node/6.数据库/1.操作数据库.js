// 1.导入mysql模块
const mysql = require('mysql')
// 2.建立与MySQL数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '629000',
    database: 'jdbcdemo'
})

db.query('select * from account', (err, results) => {
    if(err) return console.log(err.message);
    console.log(results);
})