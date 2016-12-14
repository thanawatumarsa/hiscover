import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Write from './components/Write'
import Story from './components/Story'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/write', component: Write },
  { path: '/story/:id', component: Story }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
