<!--单文件组件-->
<template>
  <div id="app">
    <!--显示当前路由地址对应的内容-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
