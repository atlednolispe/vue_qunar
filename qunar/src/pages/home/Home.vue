<!--template下只能有一个根元素-->
<template>
  <div>
    <div class="home">Home</div>
    <router-link to="/list">List</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .home {
    font-size: 50px;
  }
</style>
