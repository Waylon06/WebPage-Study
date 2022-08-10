// 导入fs模块
const fs = require('fs');
// 导入path模块
const path = require('path');

// 定义正则表达式，分别匹配<style></style> 和 <script></script> 标签
//  \s匹配空白字符 \S匹配非空白字符
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', function (err, dataStr) {
    // 读取文件失败
    if (err) return console.log('读取失败！' + err.message);

    // 读取文件成功,调用对应三个方法,分别拆解出css,js,html文件
    resolveCSS(dataStr);
    resolveScript(dataStr); 
    resolveHTML(dataStr);
});

// 定义处理css样式的方法
function resolveCSS(htmlStr) {
    // 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    // 将提取出来的样式字符串,进行字符串的replace替换操作
    // console.log(r1);
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // console.log(newCSS);
    fs.writeFile(path.join(__dirname, './CSS/index.css'), newCSS, function (err) {
        if(err) {
            return console.log('写入CSS样式失败！' + err.message);
        }
        console.log('样式层叠表写入成功！');
    })
}

// 定义处理js样式的方法
function resolveScript(htmlStr) {
    const r2 = regScript.exec(htmlStr);
    const newScript = r2[0].replace('<script>', '').replace('</script>', '');
    console.log(newScript);
    fs.writeFile(path.join(__dirname, './JS/index.js'), newScript, function(err){
        if(err) {
            console.log('写入JS文件失败' + err.message);
        }
        console.log('写入JS文件成功！');
    })
}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./CSS/index.css">').replace(regScript, '<script src="./JS/index.js"></script>');
    fs.writeFile(path.join(__dirname, './index2.html'), newHTML, function(err) {
        if(err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
}