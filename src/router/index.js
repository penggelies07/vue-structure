import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['../views/Home'], resolve)
    }, {
      path: '/one',
      name: 'one',
      component: (resolve) => require(['../views/One'], resolve)
    }, {
      path: '/two',
      name: 'two',
      component: (resolve) => require(['../views/Two'], resolve),
      children: [
        {
          path: 'twoChild',
          name: 'twoChild',
          component: (resolve) => require(['../views/TwoChild'], resolve)
        }
      ]
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
