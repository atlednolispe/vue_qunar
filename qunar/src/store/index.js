import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    // 如果没有异步操作,直接跳过actions调用mutations也可以
    changeCity (state, city) {
      state.city = city
    }
  }
})
