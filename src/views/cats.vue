<template>
  <div class="cats">
    <h1>Котики</h1>

    <div v-if="store.loading">Загружаем...</div>

    <div v-else-if="store.cats.length" class="cats-container">
      <div v-for="(cat, index) in store.cats" :key="cat.id" class="cat-card">
        <p>Котик {{ index + 1 }}</p>
        <img :src="cat.url" :alt="'Котик ' + (index + 1)">
      </div>
    </div>

    <p v-else>Нет котиков</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/store'
import { onMounted } from 'vue'

const store = useCounterStore()

onMounted(() => {
  store.fetchCats()
})
</script>

<style scoped>
.cats {
  text-align: center;
  padding: 20px;
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
</style>