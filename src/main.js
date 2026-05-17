import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Создаём приложение
const app = createApp(App)

// Регистрируем роутер
app.use(router)

// Монтируем приложение
app.mount('#app')