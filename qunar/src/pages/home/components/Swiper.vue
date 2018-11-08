<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 2000,
      },
      swiperList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/1b/4143c7e0bfe78d02.jpg_750x200_5a220f6e.jpg'
        },
        {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*wrapper下子组件含有active class*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: white !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%  /* 自适应宽高比 overflow width height padding-bottom */
    background: #eee
    .swiper-img
      width: 100%
</style>
