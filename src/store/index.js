import Vue from 'vue'
import Vuex from 'vuex'

import ecommerce from "@/resources/ecommerce/_store"

Vue.use(Vuex)

const modules = {
  ecommerce
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV != "production",
  modules
})