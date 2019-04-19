import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
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
      console.log(payload)
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
