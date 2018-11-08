<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/86/86bc4db81a8b229da3.water.jpg_200x200_30a5026d.jpg',
          title: '良渚文化村白鹭泉汤池',
          desc: '风景宜人'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/86/86bc4db81a8b229da3.water.jpg_200x200_30a5026d.jpg',
          title: '良渚文化村白鹭泉汤池',
          desc: '风景宜人'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/86/86bc4db81a8b229da3.water.jpg_200x200_30a5026d.jpg',
          title: '良渚文化村白鹭泉汤池',
          desc: '风景宜人'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/86/86bc4db81a8b229da3.water.jpg_200x200_30a5026d.jpg',
          title: '良渚文化村白鹭泉汤池',
          desc: '风景宜人'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    margin-top: .2rem
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .2rem
        background: #ff9300
        padding: .1rem
        border-radius: .06rem
        color: #fff
</style>
