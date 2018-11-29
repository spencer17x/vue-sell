<template>
  <div>
    <div class="menu-wrap">
      <!-- <router-link tag="div" class="menu-item active-menu" to="/">
        <span class="iconfont">&#xe722;</span>
        首页
      </router-link>
      <router-link tag="div" class="menu-item" to="/find">
        <span class="iconfont">&#xe60c;</span>
        发现
      </router-link>
      <router-link tag="div" class="menu-item" to="/order">
        <span class="iconfont">&#xe637;</span>  
        订单
      </router-link>
      <router-link tag="div" class="menu-item" to="/mine">
        <span class="iconfont">&#xe627;</span>  
        我的
      </router-link> -->
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
