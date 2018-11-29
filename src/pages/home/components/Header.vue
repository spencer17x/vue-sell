<template>
  <div class="header">
    <div class="header-top">
      <span class="iconfont current-pos">&#xe611;</span>
      华一路华正科技园
      <span class="iconfont choose-pos">&#xe63f;</span>
    </div>
    <div class="search-wrap">
      <input type="text" placeholder="搜索饿了么商家、商品名称" @input="handleInput"/>
      <span class="iconfont search-icon" ref="searchEle">&#xe61b;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleInput (e) {
      if (e.target.value) {
        this.$refs.searchEle.style.display = 'none'
      } else {
        this.$refs.searchEle.style.display = 'block'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../style/varibles.styl'
  .header
    position sticky
    top -90px
    z-index 999
    padding 0 20px
    background-image linear-gradient(90deg,#0af,#0085ff)
    .header-top
      font-size $font-size18
      font-weight bolder
      height 90px
      display flex
      align-items center
      color $colorA
      padding-top 50px
      box-sizing border-box
      .current-pos
        font-size $font-size18
        margin-right 14px
      .choose-pos
        margin-left 10px
    .search-wrap
      position relative
      height 100px
      line-height 100px
      text-align center
      input
        text-align center
        width 100%
        height 60px
        border 0
        outline 0
        font-size $font-size14
        padding 0 20px
        box-sizing border-box
      .search-icon
        position absolute
        left 140px
        font-size $font-size20
        bottom 10px
</style>
