<template>
  <div class="common-header">
    <span class="iconfont">&#xe60e;</span>
    {{headerTitle}}
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: ['headerTitle']
}
</script>

<style lang="stylus" scoped>
  .common-header
    height 90px
    line-height 90px
    text-align center
    background-image linear-gradient(90deg,#0af,#0085ff)
    color #fff 
    position relative
    font-size 18Px
    font-weight bolder
    .iconfont
      position absolute
      font-weight 500
      left 20px
      font-size 20Px
</style>
