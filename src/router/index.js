import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'
import Error404 from '../views/Error404'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: "*",
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
