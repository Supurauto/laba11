import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    users: [],           // для API пользователей
    cats: [],            // ← добавляем массив для котиков
    loading: false,      // ← состояние загрузки
    formData: {
      name: '',
      email: ''
    },
    postResponse: null
  }),

  actions: {
    // ... остальные actions (fetchUsers, submitForm)

    // 🐱 НОВЫЙ action для получения котиков
    async fetchCats(limit = 6) {
      this.loading = true
      try {
        // Можно указать лимит: ?limit=6
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
        const data = await response.json()
        this.cats = data  // data это массив объектов с полем url
        console.log('Котики загружены:', this.cats)
      } catch (error) {
        console.error('Ошибка загрузки котиков:', error)
      } finally {
        this.loading = false
      }
    }
  }
})