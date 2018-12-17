<template>
  <div class="shop-wrapper">
    <div class="shop-header">
      <div class="header-shadow"></div>
      <router-link to="/" tag="div" class="iconfont">&#xe60e;</router-link>
      <img class="shop-img" src="//fuss10.elemecdn.com/c/d9/1fb884f2d51545a7a9969e5daf025png.png?imageMogr/format/webp/thumbnail/150x/" alt="">
    </div>
    <div class="header-desc">
      <h1 class="desc-title">古槐里农家菜(梦想小镇店)</h1>
      <div class="desc-one">
        <div class="rate">评价4.5</div>
        <div class="sales">月售935单</div>
        <div class="time">蜂鸟快送约32分钟</div>
      </div>
      <div class="coupon-wrapper">
        <div class="coupon-l">
          <span>￥7</span>
          <span class="coupon-l-desc">无门槛</span>
        </div>
        <div class="coupon-r">领取</div>
      </div>
      <div class="desc-two">
        <div>满减</div>
        <div>满26减13，满65减21，满85减29，满130减42</div>
      </div>
      <div class="desc-announcement">公告：新鲜食材，优厨现烧，古槐里农家炒菜，等你</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style lang="stylus" scoped>
  .shop-wrapper
    .shop-header
      position relative
      width 100%
      height 200px
      background-image url('//fuss10.elemecdn.com/f/f7/bb8a4429622b88822d5f4ac475d37png.png?imageMogr/format/webp/thumbnail/750x/')
      background-size cover
      background-position 50%
      .header-shadow
        height 200px
        background-image linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5))
      .iconfont
        color #fff
        font-size 20Px
        position absolute
        left 10px
        top 10px
      .shop-img
        width 150px
        position absolute
        bottom -30px
        left 50%
        transform translateX(-50%)
    .header-desc
      text-align center
      margin-top 60px
      .desc-title
        font-size 20Px
        font-weight 700
      .desc-one
        display flex
        align-items center
        line-height 60px
        justify-content center
        color #666
        .sales
          margin 0 20px
      .desc-two
        display flex
        justify-content center
        line-height 60px
      .coupon-wrapper
        width fit-content
        margin 0 auto
        height 40px
        display flex
        .coupon-l
          box-sizing border-box
          border-radius 0 10px 10px 0
          padding-left 30px
          background #ffe578
          width 200px
          line-height 40px
          color #594519
          font-weight 700
          text-align left
          .coupon-l-desc
            margin-left 20px
        .coupon-r
          border-radius 10px 0 0 10px
          background #ffe578
          width 50px
          line-height 40px
          padding 0 20px
      .desc-announcement
        color #666
</style>
