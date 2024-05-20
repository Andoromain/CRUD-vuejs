<script setup>
import { ref } from "vue";

const data = ref('');

const emit=defineEmits(['change'])

const change = (e) => {
    emit('change', e.target.value);
}

</script>

<template>
    <input type="text" @change="change" v-model="data"/>
</template>