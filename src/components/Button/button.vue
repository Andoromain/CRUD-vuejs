<script setup>
import { ref } from "vue";

defineEmits(['clicker'])
defineProps(['name'])

</script>
 
<template>
    <button style="margin:0 10px" @click="$emit('clicker')">{{name}}</button>
</template>