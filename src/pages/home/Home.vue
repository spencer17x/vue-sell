<template>
  <div>
    <Header></Header>
    <Content></Content>
    <div>home</div>
  </div>
</template>

<script>
import Header from "./components/Header"
import Content from './components/Content'
export default {
  name: 'Home',
  components: {
    Header,
    Content
  }
}
</script>

<style lang="stylus" scoped>

</style>
