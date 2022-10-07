const waylon = require('./waylon-tools')

const time = waylon.dateFormat(new Date());

console.log(time);

const htmlStr = '<h1 title="abc">这是一个h1标签<span>123&nbsp;</span></h1>'

const result = waylon.htmlEscape(htmlStr);
console.log(result);
const re = waylon.htmlUnEscape(result);
console.log(re);