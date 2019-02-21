import { DefineMutations } from 'vuex-type-helper'
import { State } from './state'

export enum types {
  CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME',
  CHANGE_LAST_NAME = 'CHANGE_LAST_NAME'
}

export interface Mutations {
  [types.CHANGE_FIRST_NAME]: {
    firstName: string
  }
  [types.CHANGE_LAST_NAME]: {
    lastName: string
  }
}

const mutations: DefineMutations<Mutations, State> = {
  [types.CHANGE_FIRST_NAME](state, { firstName }) {
    state.firstName = firstName
  },
  [types.CHANGE_LAST_NAME](state, { lastName }) {
    state.lastName = lastName
  }
}

export default {
  ...mutations
}
