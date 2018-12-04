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
      <div class="restaurant-item" v-for="(item, index) of lists" :key="index">
        <div class="restaurant-item-top new-res">
          <div class="item-pic">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="item-content">
            <p class="item-t">{{item.title}}<span class="item-t-right" @click="handleToggleMask(index)">···</span></p>
            <p class="order-num">{{item["sale-desc"]}}</p>
            <p class="price">
              <span>{{item["para-desc"]}}</span>
              <span class="right">{{item["miles-time"]}}</span>
            </p>
          </div>
        </div>
        <div :class="['res-mask', {'show': currentIdx == index}]" @click="handleHideMask">
          <div class="res-mask-txt" @click="handleRemoveItem(index)">不喜欢</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      currentIdx: -1
    }
  },
  props: ['lists'],
  methods: {
    handleToggleMask (index) {
      this.currentIdx = index
    },
    handleHideMask () {
      this.currentIdx = -1
    },
    handleRemoveItem (index) {
      this.lists.splice(index, 1)
      this.currentIdx = -1
    }
  }
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
      margin-bottom 140px
      .title-wrap
        background #fff
        position sticky
        z-index 999
        top 100px
        display flex
        .list-title
          line-height 80px
          font-size 14Px
          flex 1
          text-align center
      .restaurant-item
        padding 20px
        position relative
        .restaurant-item-top
          display flex
          .item-pic
            width 130px
            overflow hidden
            img 
              width 100%
          .item-content
            flex 1
            padding-left 20px
            .item-t
              line-height 24Px
              font-size 16Px
              .item-t-right
                float right
                font-size 12Px
                color #666
            .order-num
              line-height 28Px
            .price
              position relative
              .right
                position absolute
                right 20px
                color #999
        .res-mask
          display none 
          position absolute
          left 0
          right 0
          top 0
          bottom 0
          background rgba(0,0,0,.5)
        .show
          display block
          .res-mask-txt
            background #fff
            position absolute
            width 100px
            height 100px
            text-align center
            line-height 100px
            border-radius 50%
            left 0
            right 0 
            bottom 0
            top 0
            margin auto
        .new-res
          &::after
            content ''
            text-align center
            display block
            position absolute
            border-left 60px solid #26ce61
            border-bottom 60px solid transparent
            border-right 50px solid transparent
</style>
