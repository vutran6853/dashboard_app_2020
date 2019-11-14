import * as type from './task_mutations'

const state = {
  item: [
    { id: 1, text: 'I love vue', isTrue: false },
    { id: 2, text: 'I love anime', isTrue: false },
    { id: 3, text: 'I love javascript', isTrue: false },
    { id: 4, text: 'I love react', isTrue: false }
  ],
  task: {
    price: Number,
    date: ''
  }
}

const getters = {
  getItem: function(state) {
    return state.item.map((value) => value.text)
  }
}

const actions = {
  UPDATE_NEW_ITEM_ACTION: function({}, payload) {
    let obj = {
      id: Math.random(),
      text: payload,
      is: false
    }
    this.commit(type.SET_NEW_ITEM, obj)
  },
  UPDATE_ITEM_ISTRUE_ACTION: function({}, passID) {
    this.commit(type.SET_ITEM_ISTRUE, passID)
  }
}

const mutations = {
  SET_NEW_ITEM: function(state, payload) {
    console.log({ payload })
    state.item = [...state.item, payload]
  },
  SET_ITEM_ISTRUE: function(state, payload) {
    state.item = state.item.filter((value) => {
      if (value.id === payload.id) {
        value.isTrue = !value.isTrue
      }
      return value
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
