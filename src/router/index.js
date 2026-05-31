import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/cats',
    name: 'cats',
    component: () => import('../views/cats.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router