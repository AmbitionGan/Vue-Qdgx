<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/common/Header'

export default {
  name: 'Index',
  components: {
    Header
  }
}
</script>

<style>

</style>
