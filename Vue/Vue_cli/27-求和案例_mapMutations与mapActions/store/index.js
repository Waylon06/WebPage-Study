// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from "vuex";
// 应用vuex插件
Vue.use(Vuex)
// 准备actions --用于响应组件中的动作
const actions = {
    // 在plus与decrement并没有什么操作，可以直接在Count的methods里commit给mutations
    /* plus(context, value) {
        context.commit('PLUS', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    }, */
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
}
// 准备mutations --用于操作数据（state）
const mutations = {
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
    }
}

// 准备getters --用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}
// 准备state --用于存储数据
const state = {
    sum: 0,
    school: 'Bilibili',
    subject: 'Computer'
}



const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// 导出store
export default store