// 引用
import Vue from 'vue'
import Vuex from 'vuex'

// 使用
Vue.use(Vuex)

// 创建state
const state = {
    
}

// 创建mutations
const mutations = {

}

// 实例化 Vuex.store 对象
const store = new Vuex.Store({
    // 属性值
    stat: state,
    mutations: mutations
})

// 暴露store 对象
export default store;