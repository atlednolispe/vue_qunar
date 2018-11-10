<!--template下只能有一个根元素-->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="iconfont arrow-icon">&#xe64a;</span>
        {{ this.$store.state.city }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!--使用stylus写样式,scoped使样式只在Header组件使用-->
<!--npm install stylus stylus-loader &#45;&#45;save-->
<!--(reset.css) 1rem = html font-size = 50px-->
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  @import "~styles/mixins.styl"
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .11rem
      margin-bottom: .11rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      ellipsis()
      .arrow-icon
        font-size: .24rem
        padding-left: -.04rem
</style>
