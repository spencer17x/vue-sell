<template>
  <div class="order-wrap">
    <CommonHeader :headerTitle="headerTitle"></CommonHeader>
    <div class="login" v-if="!isLogin">
      <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="" class="login-pic">
      <div>
        <p class="desc">登录后查看外卖订单</p>
        <router-link tag="button" class="login-btn" to="/login">立即登录</router-link>
      </div>
    </div>
    <div class="order-list" v-else>
      <div class="item" v-for="item of orderList" :key="item.id">
        <div class="top">
          <img :src="item.imgUrl" alt="">
          <div class="desc">
            <div class="title">{{item.title}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="order-ok">{{item.orderOk}}</div>
        </div>
        <div class="middle">
          <div class="commodity">{{item.commodity}}</div>
          <div class="price">{{item.price}}</div>
        </div>
        <div class="bottom">
          <button class="btn-left">再来一单</button>
          <button class="btn-right">评价得金币</button>
        </div>
      </div>
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
      headerTitle: '订单',
      isLogin: this.$store.state.isLogin,
      orderList: []
    }
  },
  mounted () {
    if (this.isLogin) {
      this.getOrderList()
    }
  },
  methods: {
    getOrderList () {
      this.axios.get('/api/orderList.json')
        .then(res => {
          const data = res.data
          this.orderList = data
        })
    },
  },
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
  .order-list
    margin-bottom 100px
    .item
      padding 40px 20px
      .top
        position relative
        display flex
        img
          width 64px
          height 64px
        .desc
          padding-left 20px
          .title
            font-size 16Px
          .time
            color #999
            padding-top 10px
        .order-ok
          position absolute
          right 0
          top 8px
      .middle
        display flex
        margin-left 80px
        padding 60px 0
        position relative
        .price
          position absolute
          right 0
          font-weight bold
        .commodity
          color #666
      .bottom
        text-align right
        button 
          background #fff
          border 1px solid  #000 
          outline none
          padding 10px 15px
        .btn-left
          color #2395ff
          border 1Px solid #2395ff
          border-radius 8px
          margin-right 20px
        .btn-right
          color #ff5339
          border 1Px solid #ff5339
          border-radius 8px
</style>
