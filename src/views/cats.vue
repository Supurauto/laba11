<template>
  <div class="cats">
    <h1>🐱 Случайные котики</h1>
    
    <!-- Кнопка загрузки -->
    <button @click="loadMoreCats" :disabled="store.loading">
      {{ store.loading ? 'Загружаем...' : 'Получить котиков 🐾' }}
    </button>

    <!-- Состояние загрузки -->
    <div v-if="store.loading" class="loader">
      <p>Ищем котиков... 🐈</p>
    </div>

    <!-- Сетка с котиками -->
    <div v-else class="cats-container">
      <div v-for="cat in store.cats" :key="cat.id" class="cat-card">
        <img 
          :src="cat.url" 
          :alt="'Котик ' + cat.id"
          @error="handleImageError"
        >
      </div>
    </div>

    <!-- Если нет котиков -->
    <p v-if="!store.cats.length && !store.loading" class="empty">
      Нажми кнопку, чтобы увидеть котиков! 😺
    </p>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/store'
import { onMounted } from 'vue'

const store = useMainStore()

// Загружаем котиков при монтировании компонента (опционально)
onMounted(() => {
  store.fetchCats(6)  // загружаем 6 котиков
})

// Загружаем еще котиков
const loadMoreCats = () => {
  store.fetchCats(6)
}

// Если фото не загрузилось - заглушка
const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/300x300?text=:(+No+cat'
}
</script>

<style scoped>
.cats {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #ff6b6b;
  margin-bottom: 20px;
}

button {
  background-color: #ff9f43;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: transform 0.2s;
}

button:hover:not(:disabled) {
  transform: scale(1.05);
  background-color: #ff7f2a;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.cats-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.cat-card {
  width: 280px;
  height: 280px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  background-color: #f9f9f9;
}

.cat-card:hover {
  transform: translateY(-5px);
}

.cat-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.loader {
  margin-top: 50px;
  font-size: 18px;
  color: #ff6b6b;
}

.empty {
  margin-top: 50px;
  font-size: 18px;
  color: #888;
}
</style>