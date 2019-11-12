<template>
  <div class="app_container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './components/navbar/navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

.app_container {
  display: grid;
  grid-template-columns: 10rem 1fr;
  height: 100vh;
}
</style>
