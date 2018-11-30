<template>
  <div>
    <Header></Header>
    <Content></Content>
    <Banner></Banner>
    <Recommend></Recommend>
    <!-- <Menu></Menu> -->
    <div class="iconfont back-top" v-show="isShow" @click="handleBackTop">&#xe615;</div>
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
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Header,
    Content,
    Banner,
    Recommend,
    // Menu
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (document.documentElement.scrollTop > 400) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    handleBackTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .back-top
    width 85px
    height 85px
    background #fff
    border-radius 50%
    position fixed
    right 60px
    border 2px solid #ccc
    text-align center
    line-height 85px
    bottom 180px
    font-size 22Px
    color #999
</style>
