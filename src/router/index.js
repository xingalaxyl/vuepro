import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login') },
  { path: '/home', name: 'home', component: () => import('@/views/home') }
]

const router = new VueRouter({
  routes
})
// 配置路由守卫
router.beforeEach((to, from, next) => {
  let userinfo = window.localStorage.getItem('userinfo')
  if (!userinfo && to.path !== '/login') {
    return next('/login')
  }
  next()
})

export default router
