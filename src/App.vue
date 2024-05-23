<script setup>
import Home from './pages/Home/Home.vue'
import Nav from './components/Nav/Nav.vue'
import { provide } from 'vue';

provide('location', 'value');
</script>

<template>
  <div>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
