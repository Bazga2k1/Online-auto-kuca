import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ConfigView1 from '../views/ConfigView1.vue'
import carName from '../components/carCardComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/prijava',
    name: 'LoginView',
    component: LoginView
  },

  {
    path: '/registracija_firme',
    name: 'RegisterView',
    component: RegisterView
  },

  {
    path: '/:carName/konfiguracija1',
    name: 'ConfigView1',
    component: ConfigView1, carName
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router