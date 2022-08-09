const fs = require('fs');

fs.readFile('./成绩.txt', 'utf8', function(err, dataStr) {
    if(err) {
        console.log('读取失败！\n' + err.message);
    }else {
        console.log('读取成功！\n' + dataStr);

        // 先把成绩的数据，按照空格进行分割
        const arrOld = dataStr.split(' ');
        console.log(arrOld);
        // 循环分割后的数组，对每一项数据，进行字符串的替换操作
        const arrNew = [];
        arrOld.forEach(item => {
            arrNew.push(item.replace('=', ':'));
        })
        console.log(arrNew);
        // 把新数组中的每一项，进行合并，得到一个新的字符串
        const newStr = arrNew.join('\r\n');
        console.log(newStr);
        fs.writeFile('./新成绩列表.txt', newStr, function(err) {
            if(err) {
                console.log('写入失败！\n' + err.message);
            }
        })
    }
})