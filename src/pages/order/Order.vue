<template>
  <div class="order-wrap">
    <CommonHeader :headerTitle="headerTitle"></CommonHeader>
    <div class="login">
      <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="" class="login-pic">
      <p class="desc">登录后查看外卖订单</p>
      <router-link tag="button" class="login-btn" to="/login">立即登录</router-link>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../common/CommonHeader'
export default {
  name: 'Order',
  components: {
    CommonHeader
  },
  data () {
    return {
      headerTitle: '订单'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login
    text-align center
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    .login-pic
      width 400px
    .desc
      color #6a6a6a
      font-size 18Px
      padding 20px 0
    .login-btn
      background #56d176
      color #fff
      outline 0
      border 0
      width 240px
      height 78px
      font-size 16Px
      border-radius 8px
</style>
