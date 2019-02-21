import { DefineActions } from 'vuex-type-helper'
import { State } from './state'
import { Getters } from './getters'
import { Mutations, types } from './mutations'

export interface Actions {
  changeFirstNameAsync: {
    firstName: string
  }
  changeLastNameAsync: {
    lastName: string
  }
}

const actions: DefineActions<Actions, State, Mutations, Getters> = {
  changeFirstNameAsync({ commit }, payload) {
    setTimeout(() => {
      commit(types.CHANGE_FIRST_NAME, payload)
    }, 300)
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     commit(types.CHANGE_FIRST_NAME, payload)
    //   }, 3000)
    // })
  },
  changeLastNameAsync({ commit }, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(types.CHANGE_LAST_NAME, payload)
      }, 300)
    })
  }
}

export default {
  ...actions
}
