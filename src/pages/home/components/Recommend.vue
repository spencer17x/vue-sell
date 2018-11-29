<template>
  <div class="rec-wrap">
    <div class="rec-header">
      推荐商家
    </div>
    <div class="res-merchant-list">
      <div class="title-wrap">
        <div class="list-title">
          综合排序
          <span class="iconfont">&#xe63f;</span>
        </div>
        <div class="list-title">距离最近</div>
        <div class="list-title">品质联盟</div>
        <div class="list-title">
          筛选
          <span class="iconfont">&#xe645;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style lang="stylus" scoped>
  .rec-wrap
    .rec-header
      text-align center
      font-size 15Px
      height 80px
      align-items center
      display flex
      justify-content center
      &::before
        width 20Px
        height 3px
        background #666
        content ''
        display inline-block
        margin-right 20px
      &::after
        margin-left 20px
        width 20Px
        height 3px
        background #666
        content ''
        display inline-block
    .res-merchant-list
      height 1000Px // 测试高度
      .title-wrap
        position sticky
        z-index 999
        top 100px
        display flex
        .list-title
          line-height 80px
          font-size 14Px
          flex 1
          text-align center
</style>
