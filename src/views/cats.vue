<template>
  <div class="cats">
    <h1>Котики</h1>

    <div class="cats-container">
      <div class="cat-card">
        <img src="/src/assets/1.jpg" alt="Фото котика 1">
        <p>Котик 1</p>
      </div>

      <div class="cat-card">
        <img src="/src/assets/2.jpg" alt="Фото котика 2">
        <p>Котик 2</p>
      </div>

      <div class="cat-card">
        <img src="/src/assets/3.jpg" alt="Фото котика 3">
        <p>Котик 3</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cats {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #ff6b6b;
  margin-bottom: 30px;
}

.cats-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.cat-card {
  text-align: center;
}

.cat-card img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
}

.cat-card p {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #555;
}
</style>