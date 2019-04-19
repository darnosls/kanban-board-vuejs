import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: {
      name: '',
      description: '',
      step: 'backlog'
    }
  },
  getters: {
    task(state) {
      return state.task
    }
  },
  mutations: {
    SET_TASK: function(state, payload) {
      state.task = payload
    }
  },
  actions: {
    async createTask({ commit }, { payload }) {
      console.log('Criando tarefas')
      commit('SET_TASK', payload)
      return true
    }
  }
})
