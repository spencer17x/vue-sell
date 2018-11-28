<template>
  <div class="content">
    <swiper :options="swiperOption" v-if="lists.length">
      <swiper-slide v-for="(list, index) of lists" :key="index">
        <div class="list">
          <div class="list-item" v-for="item of list" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <div class="item-text">{{item.desc}}</div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      lists: [],
      swiperOption: { // 在swiper上面加个 v-if 判断，确保图片获取完成之后再渲染swiper组件
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        // observer: true,
        // observeParents: true,
        // autoplay: true
      }
    }
  },
  created () {
    this.axios.get('/api/list.json')
      .then(res => {
        if (res.status == 200) {
          const list = res.data
          let newList = []
          for (let i = 0; i < Math.ceil(list.length/10); i++) {
            newList.push(list.slice(i*10, 10*(i + 1)));
          }
          this.lists = newList
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
  .list
    display flex
    height 354px
    flex-wrap wrap
    align-items center
    .list-item
      width 20%
      text-align center
      .item-text
        color #666
    img
      width 90px
</style>
