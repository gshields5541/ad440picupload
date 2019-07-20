<template>
  <div id="app">
    <dropzone></dropzone>
  </div>
</template>

<script>
import Dropzone from './components/Dropzone.vue'

export default {
  name: 'app',
  components: {
    Dropzone
  }
}
</script>

<style lang="stylus">
body
  font-familty 'Open Sans', sans-serif
</style>