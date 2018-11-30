<template>
  <div>
    <router-view></router-view>
    <div class="menu-wrap">
      <router-link tag="div" 
        exact-active-class="active-menu"
        class="menu-item" 
        :to="item.linkUrl" 
        v-for="(item, index) of links" :key="index">
        <span class="iconfont" v-html="item.ico"></span>
        {{item.title}}
      </router-link>
    </div>  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Menu',
  data () {
    return {
      links: [{
        ico: '&#xe722;',
        linkUrl: '/',
        title: '首页'
      }, {
        ico: '&#xe60c;',
        linkUrl: '/find',
        title: '发现'
      }, {
        ico: '&#xe637;',
        linkUrl: '/order',
        title: '订单'
      }, {
        ico: '&#xe627;',
        linkUrl: '/mine',
        title: '我的'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .menu-wrap
    box-shadow 0 -0.266667vw 0.533333vw rgba(0,0,0,.1)
    display flex
    position fixed
    bottom 0
    height 100px
    left 0
    right 0
    background #fff
    align-items center
    justify-content center
    .menu-item
      display flex
      flex 1  
      align-items center
      flex-direction column
      .iconfont
        font-size 20Px
    .active-menu 
        color #0085ff
</style>
