<template>
  <div class="cats">
    <h1>🐱 Котики</h1>

    <button @click="store.fetchCats()" :disabled="store.loading">
      {{ store.loading ? 'Загрузка...' : 'Загрузить котиков' }}
    </button>

    <div v-if="store.cats.length" class="cats-container">
      <div v-for="(cat, index) in store.cats" :key="cat.id" class="cat-card">
        <p>Котик #{{ index + 1 }}</p>
        <img :src="cat.url" :alt="'Котик ' + (index + 1)">
      </div>
    </div>

    <p v-else-if="!store.loading">Нажми кнопку, чтобы увидеть котиков</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/store'

const store = useCounterStore()
</script>

<style scoped>
.cats {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #ff6b6b;
}

button {
  background-color: #ff9f43;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.cats-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cat-card {
  width: 250px;
  text-align: center;
}

.cat-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.cat-card p {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>