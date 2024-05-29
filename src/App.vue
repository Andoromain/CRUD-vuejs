<script setup>
import Nav from "./components/Nav/Nav.vue";
</script>

<template>
  <div
    class="surface-card p-4 shadow-2 border-round w-8 min-h-screen mx-auto my-auto"
  >
    <Nav />
    <router-view></router-view>
  </div>
</template>
