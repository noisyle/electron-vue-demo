import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Home').default,
      children: [
        {
          path: 'settings',
          component: require('@/components/Home/Settings').default
        },
        {
          path: 'proxy',
          component: require('@/components/Home/Proxy').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/home/settings'
    }
  ]
})
