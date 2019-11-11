import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  item: [
    { id: 1, text: 'I love vue', isTrue: false },
    { id: 2, text: 'I love anime', isTrue: false },
    { id: 3, text: 'I love javascript', isTrue: false },
    { id: 4, text: 'I love react', isTrue: false }
  ]
}

const getters = {
  getItem: function(state) {
    return state.item
  }
}

const actions = {
  updateNewItemAction: function({}, payload) {
    let obj = {
      id: Math.random(),
      text: payload,
      is: false
    }
    this.commit('updateNewItem', obj)
  },
  updateItemisTrueAction: function({}, payload) {
    this.commit('updateItemisTrue', payload)
  }
}

const mutations = {
  updateNewItem: function(state, payload) {
    console.log({ payload })
    state.item = [...state.item, payload]
  },
  updateItemisTrue: function(state, payload) {
    state.item = state.item.filter((value) => {
      if (value.id === payload) {
        value.isTrue = !value.isTrue
      }
      return value
    })
  }
}

const store = new Vuex.Store({
  // strict: true,
  modules: {},
  state,
  getters,
  actions,
  mutations
})

export default store
