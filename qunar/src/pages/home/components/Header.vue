<!--template下只能有一个根元素-->
<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
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
  .header
    display: flex
    line-height: .86rem
    background: #00bcd4
    color: #fff
    .header-left
      width: 0.64rem
      float: left
    .header-input
      flex: 1
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      margin-bottom: .12rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
