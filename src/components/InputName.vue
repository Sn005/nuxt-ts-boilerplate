<template>
  <div>
    <input v-model="firstName" placeholder="input firstName" />
    <input v-model="lastName" placeholder="input lastName" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

import { Actions } from '@/store/app/actions'
const App = namespace('app')

@Component<InputName>({})
export default class InputName extends Vue {
  @App.Action changeFirstNameAsync: any
  @App.Action changeLastNameAsync: any

  firstName: string = ''
  lastName: string = ''

  created() {
    console.log(this.firstName)
  }
  @Watch('firstName')
  onFirstNameChange(value: string): void {
    this.changeFirstNameAsync({ firstName: value })
  }
  @Watch('lastName')
  onLastNameChange(value: string): void {
    this.changeLastNameAsync({ lastName: value })
  }
}
</script>
