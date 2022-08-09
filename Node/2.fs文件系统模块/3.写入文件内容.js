const fs = require('fs');
// 调用fs.writeFile()方法,写入文件的内容
// 参数1:表示文件的存放路径
// 参数2:表示要写入的内容
// 参数3:编码格式(可省略,默认成uft-8)
// 参数4:回调函数
fs.writeFile('./1.txt', 'abcd', function (err) {
    // 如果文件写入成功,则err的值为null
    // 如果文件写入失败，则err的值等于一个 错误对象
    // console.log(err);
    if (err) {
        console.log('文件写入失败！' + err.message);
    } else {
        console.log('文件写入成功');
    }
})