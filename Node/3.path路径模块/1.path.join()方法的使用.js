const path = require('path');
const fs = require('fs');

// 注意： ../ 会抵消前面的一个路径
const pathStr = path.join('/a', '/b/c', '../', './d', 'e');
console.log(pathStr);   // \a\b\d\e

// 以后的路径拼接都要使用path.join()来实现,不要使用加号(会出现一些问题)
fs.readFile(path.join(__dirname, '../2.fs文件系统模块/1.txt'), function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！\n' + err.message);
    }
    console.log('读取成功！\n' + dataStr);
})