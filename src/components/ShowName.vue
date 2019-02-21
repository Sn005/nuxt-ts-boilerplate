<template>
  <div>
    {{ fullName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, namespace } from 'vuex-class'

import { Actions } from '@/store/app/actions'
const App = namespace('app')

@Component
export default class ShowName extends Vue {
  @App.Getter private fullName!: string
}
</script>
