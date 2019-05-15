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
    task: []
  },

  initialState() {

  },

  initialTasks() {

  },
  getters: {
    task(state) {
      return state.task
    }
  },
  mutations: {
    SET_TASK: function(state, payload) {
      state.task.push(payload)
    }
  },
  actions: {
    async createTask({ commit }, { payload }) {
      if (payload.name && payload.description) {
        commit('SET_TASK', payload)
        return true
      }
    }
  }
})
