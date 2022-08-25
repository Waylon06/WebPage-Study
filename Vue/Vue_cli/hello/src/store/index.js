// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from "vuex";
// 应用vuex插件
Vue.use(Vuex)


// 求和功能相关配置
const countOptions = {
    namespaced: true,
    actions: {
        plusOdd(context, value) {
            if (state.sum % 2) {
                context.commit('PLUSODD', value)
            }
        },
        plusWait(context, value) {
            setTimeout(() => {
                context.commit('PLUSWAIT', value)
            }, 1000)
        }
    },
    mutations: {
        PLUS(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
        PLUSODD(state, value) {
            state.sum += value
        },
        PLUSWAIT(state, value) {
            state.sum += value
        },
    },
    state: {
        sum: 0,
        school: 'Bilibili',
        subject: 'Computer',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

// 人员管理相关配置
const personOptions = {
    actions: {

    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {}
}





export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
