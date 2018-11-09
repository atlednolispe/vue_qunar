<!--template下只能有一个根元素-->
<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或者拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .search
    height: .75rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
