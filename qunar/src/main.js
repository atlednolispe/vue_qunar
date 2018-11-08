// 入口文件
import Vue from 'vue'
import App from './App' // webpack默认查找.vue .js .json
import router from './router' // ./router/index.js
import fastClick from 'fastclick' // npm install fastclick --save 开发,生产都使用
import './assets/styles/reset.css' // 保证不同浏览器默认样式相同
import './assets/styles/border.css' // 1px边框, css 1px -> x px
// 移动端300ms点击延迟

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载的是根目录下index.html的#app
  router,
  components: { App },
  template: '<App/>' // = <App></App>
})
