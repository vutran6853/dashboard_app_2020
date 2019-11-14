import Vue from 'vue'
import Vuex from 'vuex'
import task from './task/task'

Vue.use(Vuex)

const store = new Vuex.Store({
  // strict: true,
  namespaced: true,
  modules: {
    task
  }
  // getters,
  // actions,
  // mutations
})

export default store
