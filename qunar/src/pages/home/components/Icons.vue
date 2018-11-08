<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png">
      </div>
      <p class="icon-desc">动植物园</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .icons
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%  /* 自适应宽高比 overflow width height padding-bottom */
    background: #eee
    .icon
      position: relative
      float: left
      width: 25%
      padding-bottom: 25%
      height: 0
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        bottom: 0
        left: 0
        right: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
</style>
