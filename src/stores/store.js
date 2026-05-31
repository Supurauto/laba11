import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cats: [],      // массив для котиков
    loading: false // состояние загрузки
  }),

  actions: {
    async fetchCats() {
      this.loading = true
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3')
        const data = await response.json()
        this.cats = data
        console.log('3 котика загружены', this.cats)
      } catch (error) {
        console.error('Ошибка загрузки котиков:', error)
      } finally {
        this.loading = false
      }
    }
  }
})