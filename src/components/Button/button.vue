<script setup>
import { ref } from "vue";

defineEmits(['clicker'])
defineProps(['name'])

</script>
 
<template>
    <button @click="$emit('clicker')">{{name}}</button>
</template>