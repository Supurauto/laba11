<template>
  <div>
    <nav>
      <RouterLink to="/">Главная</RouterLink> |
      <RouterLink to="/about">О лабе</RouterLink> |
      <RouterLink to="/cats">🐱 Котики</RouterLink> |
      <RouterLink to="/form">Форма отправки</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
nav {
  background-color: #eb7ec5;
  padding: 15px;
  text-align: center;
}
nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
</style>