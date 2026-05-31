<template>
  <div class="form-page">
    <div class="form-container">
      <h1>Обратная связь</h1>

      <form @submit.prevent="store.submitForm()">
        <div class="form-group">
          <label>Ваше имя</label>
          <input 
            type="text" 
            :value="store.form.name"
            @input="store.updateFormField('name', $event.target.value)"
            placeholder="Введите ваше имя"
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input 
            type="email" 
            :value="store.form.email"
            @input="store.updateFormField('email', $event.target.value)"
            placeholder="example@mail.ru"
          />
        </div>

        <div class="form-group">
          <label>Сообщение</label>
          <textarea 
            :value="store.form.message"
            @input="store.updateFormField('message', $event.target.value)"
            rows="4"
            placeholder="Напишите ваше сообщение..."
          ></textarea>
        </div>

        <button type="submit">Отправить</button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/store'

const store = useCounterStore()
</script>

<style scoped>
.form-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 40px 20px;
  background-color: #f5f5f5;
}

.form-container {
  max-width: 450px;
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 35px;
  border: 1px solid #e0e0e0;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 5px;
  font-size: 24px;
}

.subtitle {
  text-align: center;
  color: #888;
  margin-bottom: 30px;
  font-size: 13px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #555;
  font-size: 14px;
}

input, textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
  background: white;
  outline: none;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #ccc;
  box-shadow: none;
}

button {
  width: 100%;
  padding: 12px;
  background: #dc309a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
}

</style>