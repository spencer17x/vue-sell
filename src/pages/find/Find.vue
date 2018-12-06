<template>
  <div class="find">
    <common-header :headerTitle="headerTitle"></common-header>
    <img src="https://fuss10.elemecdn.com/9/41/253ca6a440ced6fa22044a96e6721jpeg.jpeg" alt="" class="banner-pic">
    <div class="section">
      <div class="left-part">
        <div class="txt">
          <div class="title">金币商城</div>
          <div class="desc">0元好物在这里</div>
        </div>
        <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
      </div>
      <div class="right-part">
        <div class="r-p-top">
          <div class="txt">
            <div class="title">推荐有奖</div>
            <div class="desc">10元现金拿不停</div>
          </div>
          <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" alt="">
        </div>
        <div class="r-p-bottom">
          <div class="txt">
            <div class="title">周边优惠</div>
            <div class="desc">领取口碑好券</div>
          </div>
          <img src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt="">
        </div>
      </div>
    </div>
    <div>
      <div class="time-limited-gift">限时好礼</div>
      <div class="content">
        <div class="item">
          <span>限时优惠</span>
          <img src="https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg?imageMogr/format/webp/" alt="">
          <div class="desc">3元饿了么红包</div>
          <div class="coin">90金币</div>
        </div>
        <div class="item">
          <span>限时优惠</span>
          <img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" alt="">
          <div class="desc">3元饿了么红包</div>
          <div class="coin">90金币</div>
        </div>
        <div class="item">
          <span>限时优惠</span>
          <img src="https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/" alt="">
          <div class="desc">3元饿了么红包</div>
          <div class="coin">90金币</div>
        </div>
      </div>
    </div>
    <div class="loading-more">查看更多</div>
  </div>
</template>

<script>
import CommonHeader from "../../common/CommonHeader"
export default {
  name: 'Find',
   components: {
     CommonHeader
   },
  data() {
    return {
      headerTitle: '发现'
    }
  },
}
</script>

<style lang="stylus" scoped>
  .find
    .banner-pic 
      height 220px
    .section
      margin-top 40px
      margin-bottom 40px
      display flex
      .left-part, .right-part
        flex 1
        position relative
        .txt
          padding-left 40px
          .desc
            color #999
            font-size 12Px
            line-height 24Px
          .title
            font-size 16Px
            color rgb(255, 153, 0)
      .left-part
        img 
          width 150px
          position absolute
          right 0
          bottom 0
      .right-part
        .r-p-top
          margin-bottom 50px
        .r-p-top, .r-p-bottom
          display flex
          justify-content space-between
          align-items center
          img 
            width 90px
            margin-right 20px
    .time-limited-gift
      text-align center
      font-size 16Px
      line-height 40Px
      font-weight bold
      position relative
      &::before
        content ''
        width 20Px
        height 2Px
        position absolute
        left 35%
        top 40px
        display block
        background #000
      &::after
        content ''
        position absolute
        right 35%
        top 40px
        width 20Px
        height 2Px
        display block
        background #000
    .content
      display flex
      img 
        width 220px
        margin-top 30px
      .item
        flex 1
        span
          position absolute
          background #413d3c
          color #fff
          display inline-block
          margin 20px 0 0 20px
          padding 10px 5px
          font-size 12Px
        .desc
          font-size 14Px
          color #333
          padding-left 20px
        .coin 
          padding-left 20px
          font-size 13Px
          color #ff5339
          line-height 30Px
    .loading-more
      color #999
      font-size 14Px
      text-align center
      padding-top 60px
</style>
