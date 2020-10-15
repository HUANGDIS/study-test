import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count += 1
    },
    addN(state, n) {
      state.count += n
    },
    sub(state) {
      state.count--
    },
    subN(state, n) {
      state.count -= n
    }
  },
  actions: {
    addAsync(content) {
      setTimeout(() => {
        content.commit('add')
      }, 1000)
    },
    addAsync1(content, step) {
      setTimeout(() => {
        content.commit('addN', step)
      }, 2000)
    },
    subAsync(content) {
      setTimeout(() => {
        content.commit('sub')
      }, 1000)
    }
  },
  getters: {
    showNum: state => {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
