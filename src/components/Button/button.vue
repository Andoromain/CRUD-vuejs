<script setup>
import { ref } from "vue";

defineEmits(['clicker'])
defineProps(['name','type',"icon"])

</script>
 
<template>
    <button :type="type||'button'" style="margin:0 10px" class="p-button text-center" @click="$emit('clicker')">{{name}}</button>
</template>