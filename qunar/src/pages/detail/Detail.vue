<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailList,
    DetailHeader,
    DetailBanner
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人票1',
              children: [
                {
                  title: '成人票1-hz'
                },
                {
                  title: '成人票1-sh'
                }
              ]
            },
            {
              title: '成人票2'
            }
          ]
        },
        {
          title: '学生票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
