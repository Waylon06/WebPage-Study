// 1.引入fs模块
const fs = require('fs');

// 2.使用fs的方法读取文件
// fs.readFile('./resources/登幽州台歌.md', (err, data) => {
//     // 如果出错，则抛出错误
//     if (err) throw err;
//     // 如果没有出错，则输出内容
//     // console.log(data);
//     console.log(data.toString());
// });

// 3.使用 Promise 封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('resources/登幽州台歌.md', (err, data) => {
        // 如果出错，则抛出错误
        if (err) reject(err);
        // 如果没有出错
        resolve(data);
    });
});

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('读取失败');
})
