import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // Котики
    cats: [],
    loading: false,

    // Форма
    form: {
      name: '',
      email: '',
      message: ''
    },
    formSubmitting: false
  }),

  actions: {
    // Котики
    async fetchCats() {
      this.loading = true
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        const data = await response.json()
        this.cats = data.slice(0, 3)
      } catch (error) {
        console.error('Ошибка загрузки котиков:', error)
      } finally {
        this.loading = false
      }
    },

    // Форма
    updateFormField(field, value) {
      this.form[field] = value
    },

    clearForm() {
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    },

    async submitForm() {
      this.formSubmitting = true

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-type': 'application/json'
          }
        })

        const data = await response.json()
        
        console.log('Отправленные данные:', this.form)
        console.log('Ответ сервера:', data)
        
        this.clearForm()
        
      } catch (error) {
        console.error('Ошибка:', error)
      } finally {
        this.formSubmitting = false
      }
    }
  }
})