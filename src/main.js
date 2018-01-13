// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import filter from './libs/filter'
import router from './router'
import './styles/base.css'

Vue.config.productionTip = false

Vue.use(filter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
