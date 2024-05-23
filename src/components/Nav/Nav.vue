<script setup>
import { ref } from "vue";
import {ROUTES} from "../../constantes/index.js"
</script>

<template>
  <nav>
        <router-link :to="ROUTES.home">Home</router-link>
        <router-link :to="ROUTES.user">User</router-link>
  </nav>
</template>

<style scoped>
    a {
        margin: 0 10px;
    }
</style>
