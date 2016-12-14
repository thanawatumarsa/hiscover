import Vue from 'vue'
import App from './App'
Vue.use(require('vue-resource'))
require('./assets/CSS/columnCSS.css')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
