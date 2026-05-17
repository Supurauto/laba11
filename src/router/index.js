import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const routes = [
  {
    path: '/',           // URL: localhost:5173/
    name: 'home',
    component: home  // какой компонент показать
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')  // ленивая загрузка
  },
  {
    path: '/cats',   // НОВЫЙ МАРШРУТ
    name: 'cats',
    component: () => import('../views/cats.vue')
  },
  {
    path: '/contact',    // НОВЫЙ МАРШРУТ
    name: 'contact',
    component: () => import('../views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router