import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cats: [],      // для 3 котиков
    loading: false
  }),

  actions: {
    async fetchCats() {
      this.loading = true
      try {
        // Запрашиваем ровно 3 котика
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3')
        const data = await response.json()
        this.cats = data
        console.log('3 котика загружены', this.cats)
      } catch (error) {
        console.error('Ошибка:', error)
      } finally {
        this.loading = false
      }
    }
  }
})