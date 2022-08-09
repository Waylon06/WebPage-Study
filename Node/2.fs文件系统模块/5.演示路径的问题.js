const fs = require('fs');
// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径
// fs.readFile('./1.txt', 'utf-8', function(err, dataStr) {
//     if(err) {
//         return console.log('读取文件失败！\n' + err.message);
//     }
//     console.log('读取成功！\n' + dataStr);
// })

// 完整路径移植性比较差、不利于后期的维护
// fs.readFile('E:\\WebPage-Study\\Node\\2.fs文件系统模块\\1.txt', 'utf-8', function(err, dataStr) {
//     if(err) {
//         return console.log('读取文件失败！\n' + err.message);
//     }
//     console.log('读取成功！\n' + dataStr);
// })

// __dirname 表示当前文件所处目录
// console.log(__dirname);
fs.readFile(__dirname + '/1.txt', 'utf-8', function(err, dataStr) {
    if(err) {
        return console.log('读取文件失败！\n' + err.message);
    }
    console.log('读取成功！\n' + dataStr);
})