import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/pages/Home.vue'
import Users from '@/views/pages/Users.vue'
// import Gis from '@/views/pages/Gis.vue'
// import Login from '../views/Login.vue'
const Login = r => require.ensure([], () => r(require('../views/Login.vue')), 'big-pages')
const Gis = r => require.ensure([], () => r(require('../views/pages/Gis.vue')), 'big-pages')
const Home = r => require.ensure([], () => r(require('../views/pages/Home.vue')), 'big-pages')
const Null404 = r => require.ensure([], () => r(require('@/components/_404//404.vue')), 'big-pages')

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/gis',
    name: 'Gis',
    component: Gis
  },  
  {
    path: '/AddLoc',
    name: 'AddLoc',
    component: Null404,
    // beforeEnter(to, from, next){
    //   // if(store.getters.getLogin === 0){
    //     // router.push('/login')
    //   // }else{
    //     next()
    //   // }
    // }
  },  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }  
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
