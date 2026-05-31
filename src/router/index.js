import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import cats from '../views/cats.vue'      // ← импорт страницы котиков

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/about', name: 'about', component: about },
  { path: '/cats', name: 'cats', component: cats },      // ← маршрут для котиков
  { path: '/api', name: 'api', component: ApiPage },
  { path: '/form', name: 'form', component: FormPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router