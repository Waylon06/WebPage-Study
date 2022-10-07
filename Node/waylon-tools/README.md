## 安装
```
npm install waylon-tools
```

## 导入
```js
const waylon = require('waylon-tools')
```

## 格式化时间
```js
// 调用dateFormat 对时间进行格式化
const time = waylon.dateFormat(new Date());
// 打印结果  2022-10-06 01:25:48
console.log(time);
```

## 转义 HTML 中的特殊字符
```js
// 待转换的HTML字符串
onst htmlStr = '<h1 title="abc">这是一个h1标签<span>123&nbsp;</span></h1>'
// 调用htmlEscape方法进行转换
const result = waylon.htmlEscape(htmlStr);
// 打印结果  &lt;h1 title=&quot;abc&quot;&gt;这是一个h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(result);
```

## 还原 HTML 中的特殊字符
```js
// 待转换的HTML字符串
const htmlStr = '&lt;h1 title=&quot;abc&quot;&gt;这是一个h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'
// 调用htmlUnEscape方法进行转换
const result = waylon.htmlUnEscape(result);
// 打印结果 <h1 title="abc">这是一个h1标签<span>123&nbsp;</span></h1>
console.log(result);
```

## 开源协议
ISC