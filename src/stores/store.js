import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cats: [],
    loading: false
  }),

  actions: {
    async fetchCats() {
      this.loading = true
      try {
        // Делаем 3 отдельных запроса, чтобы точно получить 3 разных кота
        const requests = []
        for (let i = 0; i < 3; i++) {
          requests.push(fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()))
        }
        
        const results = await Promise.all(requests)
        this.cats = results.map(result => result[0])
        
        console.log('3 котика загружены:', this.cats)
      } catch (error) {
        console.error('Ошибка:', error)
      } finally {
        this.loading = false
      }
    }
  }
})