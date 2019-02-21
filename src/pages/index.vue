<template>
  <div>
    <h1>Hello world!</h1>
    <InputName />
    <ShowName />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InputName from '@/components/InputName.vue'
import ShowName from '@/components/ShowName.vue'
@Component({
  components: {
    InputName,
    ShowName
  }
})
export default class IndexPage extends Vue {}
</script>
