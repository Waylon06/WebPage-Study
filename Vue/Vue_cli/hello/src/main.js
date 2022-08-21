//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

import vueResource from 'vue-resource';
//关闭Vue的生产提示
Vue.config.productionTip = false
import store from './store/index'

Vue.use(vueResource);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
})