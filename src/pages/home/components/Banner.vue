<template>
  <div>
    <div class="banner-wrap">
      <div class="banner-item">
        <h1>品质套餐</h1>
        <p>搭配齐全吃得好</p>
        <a href="#" class="btn">立即抢购 ></a>
        <div class="img-wrap">
          <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
        </div>
      </div>
      <div class="banner-item">
        <h1 class="hot">限量抢购</h1>
        <p>超值美味 9.9元起</p>
        <a href="#" class="btn">2617人正在抢 ></a>
        <div class="img-wrap">
          <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
        </div>
      </div>
    </div>
    <div class="banner-swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of bannerList" :key="index">
          <div class="swiper-img">
            <img :src="item" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      bannerList: [
        'https://fuss10.elemecdn.com/9/5e/74d619e8cbea1df9bafd9162cfc89jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/b/45/998aa07aa331b2653c0ec56172065jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/4/31/bf736feabc32b61888d0169497c79jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/3/c0/14bf784d75365a3e19cbd565e1d66jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner-wrap
    padding 30px 30px 0 50px
    display flex
    .banner-item
      flex 1
      h1
        color #333
        font-size 18Px
        font-weight 800
      p
        color #777
        line-height 60px
      .btn
        color #af8260
        text-decoration none
      .img-wrap
        text-align right
        img 
          width 240px
      .hot
        color #e81919
  .banner-swiper
    width calc(100% - 40px)
    margin 0 auto
    overflow hidden
    img
      width 100%
</style>

