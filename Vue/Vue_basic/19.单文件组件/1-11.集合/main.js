/* 
该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件,它是所有组件的父组件
import App from './App.vue'

// 引入插件
import plugins from './plugins'
// 关闭 Vue的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(plugins)
/* 
  关于不同版本的Vue：

    1.Vue.js与Vue.runtime.js的区别：
      (1).Vue.js是完整版的Vue，包含：核心功能+模板解析器
      (2).Vue.runtime.js是运行版的Vue，只包含：核心功能，没有模板解析器

    2.因为Vue.runtime.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容 
*/

// 创建Vue实例对象---vm
new Vue({
  render: h => h(App),
}).$mount('#app')
