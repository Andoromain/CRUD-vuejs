<script setup>
import { ref } from "vue";
import Forms from "./Forms/Forms.vue";
import Lists from "./Lists/Lists.vue";

const data = ref([])

const save = (e) => {
    data.value = [...data.value, e];
}

const remove = (index)=>{
    data.value = data.value.filter((l,i)=>index!=i )
}

</script>

<template>
  <div>
    <h1>Page user</h1> 
    <Forms @save="save"></Forms> 
    <Lists :data="data" @remove="remove"></Lists>
  </div>
</template>