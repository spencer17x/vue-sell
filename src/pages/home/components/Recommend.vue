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
      <div class="restaurant-item">
        <div class="restaurant-item-top new-res">
          <div class="item-pic">
            <img src="https://fuss10.elemecdn.com/e/f5/0a17a7cd8d400ff7e6a5006b344e0jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="">
          </div>
          <div class="item-content">
            <p class="item-t">肯德基宅急送</p>
            <p class="order-num">月售352单</p>
            <p class="price">
              <span>￥0起送 配送费￥9</span>
              <span class="right">1.55km | 30分钟</span>
            </p>
          </div>
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
      lists: []
    }
  },
  // mounted () {
  //   this.axios.get('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=30.2752307&longitude=119.9711838&offset=24&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=4ddfb85e0fe74315958aa336ac8ead6a&terminal=h5')
  //     .then(res => {
  //       const arr = res.data.items
  //       this.lists = arr
  //     })
  // }
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
      margin-bottom 120px
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
      .restaurant-item
        padding 20px
        margin-bottom 20px
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
            .order-num
              line-height 28Px
            .price
              position relative
              .right
                position absolute
                right 20px
                color #999
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
