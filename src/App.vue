<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Menu from './common/Menu'
export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style lang="stylus" scoped>

</style>

