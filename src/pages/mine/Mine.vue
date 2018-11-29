<template>
  <div class="mine-wrap">
    <CommonHeader :headerTitle="headerTitle"></CommonHeader>
    <router-link class="header" tag="div" to="/login">
      <div class="header-left"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt=""></div>
      <div class="header-right">
        <div class="login">登录/注册</div>
        <div class="desc">登录后享受更多特权</div>
        <span class="iconfont">&#xe634;</span>
      </div>
    </router-link>
    <div class="section">
      <div class="sec-item">
        <span class="iconfont">&#xe622;</span>
        钱包
      </div>
      <div class="sec-item">
        <span class="iconfont">&#xe610;</span>
        红包
      </div>
      <div class="sec-item">
        <span class="iconfont">&#xe6c8;</span>
        金币
      </div>
    </div>
    <div class="list-item">
      <span class="iconfont" style="color: #03a9f4">&#xe614;</span>
      <span class="txt">我的地址</span>
      <span class="iconfont right-icon">&#xe634;</span>
    </div>
    <div class="list-item">
      <span class="iconfont" style="color: #8bc34a">&#xe6d0;</span>
      <span class="txt">金币商城</span>
      <span class="iconfont right-icon">&#xe634;</span>
    </div>
    <div class="list-item list-item-new">
      <span class="iconfont" style="color: #d65a84">&#xe62b;</span>
      <span class="txt">分享拿10元现金</span>
      <span class="iconfont right-icon">&#xe634;</span>
    </div>
    <div class="list-item">
      <span class="iconfont" style="color: #03a9f4">&#xe6b4;</span>
      <span class="txt">我的客服</span>
      <span class="iconfont right-icon">&#xe634;</span>
    </div>
    <div class="list-item list-item-new">
      <span class="iconfont" style="color: #03a9f4">&#xe722;</span>
      <span class="txt">下载饿了么APP</span>
      <span class="iconfont right-icon">&#xe634;</span>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../common/CommonHeader'
export default {
  name: 'Mine',
  components: {
    CommonHeader
  },
  data () {
    return {
      headerTitle: '我的'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mine-wrap
    background-color #eee
    position fixed
    left 0
    right 0
    bottom 100px
    top 0
    .header
      display flex
      align-items center
      height 200px
      background-image linear-gradient(90deg,#0af,#0085ff)
      padding 0 20px
      position relative
      .header-left
        width 120px
        overflow hidden
        img
          border-radius 50%
          width 100%
      .header-right
        margin-left 40px
        color #fff
        .login
          padding-bottom 20px
          font-size 22Px
        .iconfont
          position absolute
          right 40px
          bottom 85px
    .section
      background #fff
      display flex
      .sec-item
        display flex
        flex-direction column
        justify-content center
        align-items center
        flex 1
        height 180px
        .iconfont
          font-size 24Px
          margin-bottom 8Px
    .list-item
      margin-top 20px
      background #fff
      display flex
      height 80px
      align-items center
      .iconfont
        font-size 18Px
        margin-left 20px
        margin-right 20px
      .right-icon
        position absolute
        right 0
        font-size 12Px
      .txt
        font-size 16Px
    .list-item-new
      margin-top 0
</style>
