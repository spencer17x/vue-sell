<template>
  <div>
    <Header></Header>
    <Content></Content>
    <Banner></Banner>
    <Recommend></Recommend>
    <!-- <Menu></Menu> -->
  </div>
</template>

<script>
import Header from "./components/Header"
import Content from './components/Content'
import Banner from "./components/Banner"
import Recommend from "./components/Recommend"
// import Menu from "../../common/Menu"
export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Banner,
    Recommend,
    // Menu
  }
}
</script>

<style lang="stylus" scoped>

</style>
