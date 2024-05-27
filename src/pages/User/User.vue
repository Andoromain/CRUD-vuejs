<script setup>
import { ref } from "vue";
import Forms from "./Forms/Forms.vue";
import Lists from "./Lists/Lists.vue";
import { inject } from "vue"

const {data,save,remove,search,filters} = inject("data");

</script>

<template>
  <div>
    <h1 class="text-center">Page user</h1> 
    <Forms @save="save"></Forms> 
    <Lists :data="search.length > 0 ?filters: data" @remove="remove"></Lists>
  </div>
</template>