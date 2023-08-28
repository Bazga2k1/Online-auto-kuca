import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import carName from '../components/carCardComponent'
import ConfigView1 from '../views/ConfigView1.vue'
import ConfigView2 from '../views/ConfigView2.vue'
import ConfigView3 from '../views/ConfigView3.vue'
import ConfigView4 from '../views/ConfigView4.vue'
import TotalView from '../views/TotalView.vue'

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
    path: '/:carName/konfiguracija2',
    name: 'ConfigView2',
    component: ConfigView2, carName
  },

  {
    path: '/:carName/konfiguracija3',
    name: 'ConfigView3',
    component: ConfigView3, carName
  },

  {
    path: '/:carName/konfiguracija4',
    name: 'ConfigView4',
    component: ConfigView4, carName
  },

  {
    path: '/:carName/narudzba',
    name: 'TotalView',
    component: TotalView, carName
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