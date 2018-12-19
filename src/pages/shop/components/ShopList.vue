<template>
  <div class="wrapper">
    <div class="tabbar">
      <div :class="['tabbar-item', {'active': currentIdx === index}]" 
           v-for="(item, index) in tabbar" 
           :key="index"
           @click="changeTabbar(index)"
           >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopList',
  data () {
    return {
      tabbar: ['点餐', '评价', '商家'],
      currentIdx: 0
    }
  },
  methods: {
    changeTabbar (index) {
      this.currentIdx = index
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    .tabbar
      margin-top 20px
      display flex
      line-height 80px
      font-size 16Px
      color #666
      font-weight 500
      .tabbar-item
        flex 1
        text-align center
      .active
        &::after
          content ''
          display block
          background rgb(35, 149, 255)
          height 3Px
          width 70px
          margin auto
</style>
