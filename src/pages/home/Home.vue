<template>
  <div>
    <Header></Header>
    <Content></Content>
    <Banner></Banner>
    <Recommend ref="recommend" :lists="lists"></Recommend>
    <!-- <Menu></Menu> -->
    <div :class="{loading: loading}"></div>
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
      isShow: false,
      lists: [],
      loading: false
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
    this.axios.get('/api/recommend.json')
      .then(res => {
        const data = res.data
        this.lists = data
      })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = parseInt(getComputedStyle(document.documentElement).height)
      const clientHeight = window.innerHeight
      if (scrollTop > 400) {
        this.isShow = true
        if (scrollTop + clientHeight >= scrollHeight) {
          this.loading = true
          this.getAddRecommend()
        }
      } else {
        this.isShow = false
      }
    },
    handleBackTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    getAddRecommend () {
      this.axios.get('/api/addRecommend.json')
        .then(res => {
          const dataAdd = res.data
          this.lists.push(...dataAdd)
          this.loading = false
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
  .loading
    position fixed
    bottom 100px
    left 50%
    transform translateX(-50%)
    background #fff
    text-align center
    width 40px
    height 40px
    border-right 6px solid #0085ff
    border-radius 50%
    margin 0 auto 
    animation loading .8s linear infinite
    transform-origin center center
    @keyframes loading
      0%
        transform rotate(0)
      100%
        transform rotate(360deg)
</style>
