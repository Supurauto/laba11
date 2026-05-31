<template>
  <div class="cats">
    <h1>🐱 Котики</h1>

    <!-- Показываем загрузку -->
    <div v-if="store.loading" class="loader">
      Загружаем котиков...
    </div>

    <!-- Показываем 3 котиков -->
    <div v-else-if="store.cats.length" class="cats-container">
      <div v-for="(cat, index) in store.cats" :key="cat.id" class="cat-card">
        <p>Котик #{{ index + 1 }}</p>
        <img :src="cat.url" :alt="'Котик ' + (index + 1)">
      </div>
    </div>

    <!-- Если ошибка -->
    <p v-else>Не удалось загрузить котиков</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/store'
import { onMounted } from 'vue'

const store = useCounterStore()

// Автоматически загружаем котиков при открытии страницы
onMounted(() => {
  store.fetchCats()
})
</script>

<style scoped>
.cats {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #ff6b6b;
}

.loader {
  margin-top: 50px;
  font-size: 18px;
  color: #ff9f43;
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