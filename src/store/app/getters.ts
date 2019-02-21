import { State } from './state'

export interface Getters {
  firstName(type: State): string
  lastName(type: State): string
  fullName(type: State): string
}

const getters: Getters = {
  firstName: state => state.firstName,
  lastName: state => state.lastName,
  fullName: state => `${state.firstName}・${state.lastName}`
}

export default {
  ...getters
}
