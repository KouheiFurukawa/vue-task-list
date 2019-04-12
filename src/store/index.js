import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import * as types from './mutation-types'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    buttonAction({ commit, state, rootState })  {
      console.log("buttonAction")
    }
  }
}

export default new Vuex.Store({
  modules: {
    Form
  },
  state: {
    items: [
      {is_do: false, title: 'タスク1'},
      {is_do: true, title: 'タスク2'},
      {is_do: false, title: 'タスク3'}
    ],
    inputTitle: {date: '', text: ''},
  },
  actions: {
    [types.ADD_TASK] ({ commit }, title) {
      let newItem = {
        title: title,
        is_do: false
      }
      commit( types.ADD_TASK, {
        data: newItem
      })
    },
    [types.DONE_TASK] ({ commit }, item) {
      commit( types.DONE_TASK, {
        data: item
      })
    },
    [types.CHANGE_INPUT] ({ commit }, item) {
      commit( types.CHANGE_INPUT, {
        data: item
      })
    }
  },
  mutations: {
    [types.ADD_TASK] (state, payload) {
      state.items.push(payload.data);
    },
    [types.DONE_TASK] (state, payload) {
      let index = state.items.indexOf(payload.data)
      state.items[index].is_do = !payload.data.is_do
    },
    [types.CHANGE_INPUT] (state, payload) {
      state.inputTitle = payload.data;
    },
  },
})
