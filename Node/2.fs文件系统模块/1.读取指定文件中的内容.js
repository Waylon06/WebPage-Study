// 导入fs模块，来操作文件
const fs = require('fs');

// 调用fs.readFile()方法来读取文件
// 参数1：读取文件的路径
// 参数2：读取文件时采用的编码格式，一般默认指定UTF-8
// 参数3：回调函数，拿到读取失败和成功的结果 function(err, dataStr)

fs.readFile('./1.txt', 'utf8', function(err, dataStr) {

    // 打印失败的结果
    // 如果读取成功,则err的值就为null
    // 如果读取失败,则err的值为 错误对象, dataStr的值为 undefined
    console.log(err);
    console.log('-----');

    // 打印成功的结果
    console.log(dataStr);
})