// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


// 创建一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            /* props: {
                                a: 1,
                                b: 'hello'
                            } */

                            // props的第二种写法，值为布尔值,若布尔值为真，就会把该路由收到的params参数，以props的形式传给Detail组件
                            // props: true

                            // props的第三种写法，值为函数
                            /* props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            } */
                            // 解构赋值写法（一）
                            /* props({query}) {
                                return {
                                    id: query.id,
                                    title: query.title
                                }
                            } */
                            // 解构赋值写法（二）  连续解构赋值
                            props({query:{id, title}}) {
                                return {
                                    id: id,
                                    title:title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})