<template>
  <div class="contact">
    <h1>Контакты</h1>
    <p>Email: {{ email }}</p>
    <p>Адрес: {{ addres }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'add98@tpu.ru',
      addres: 'ул. Вершинина 46'
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 20px;
  text-align: center;
}
</style>