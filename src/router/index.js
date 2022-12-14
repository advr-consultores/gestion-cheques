import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import store from '../store'

import Cheques from '../views/Cheque.vue'
import NuevoCheque from '../components/NuevoCheque.vue'
import VerCheque from '../components/VerCheque.vue'
import IniciarSesion from '../components/IniciarSesion.vue'
import Usuario from '../views/Usuario.vue'

const enterIfUserAutenticado = (to, from, next) => {
  if (store.getters.getIfUsuarioAuth) {
    next()
  } else {
    next('/login')
  }
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    name: 'Cheques',
    component: Cheques,
    beforeEnter: enterIfUserAutenticado,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cheque/nuevo',
    name: 'NuevoCheque',
    component: NuevoCheque,
    beforeEnter: enterIfUserAutenticado
  },
  {
    path: '/cheque/:id',
    name: 'VerCheque',
    props: true,
    component: VerCheque,
    beforeEnter: enterIfUserAutenticado
  },
  {
    path: '/usuarios/',
    name: 'Usuarios',
    component: Usuario,
    beforeEnter: enterIfUserAutenticado
  },
  // {
  //   path: '/send',
  //   name: 'send',
  //   component: send,
  // },
  {
    path: '/login',
    name: 'Login',
    component: IniciarSesion
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

export default router
