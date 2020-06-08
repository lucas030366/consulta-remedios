import Vue from 'vue'
import VueRouter from 'vue-router'

const App = () => import("../views/Index")
const Error = () => import('@/views/Erro')

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/produtos"
  },
  {
    path: '/produtos',
    component: App
  },
  {
    path: '*',
    redirect: '/erro'
  },
  {
    path: '/erro',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
