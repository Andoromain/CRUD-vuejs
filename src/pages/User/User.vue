<script setup>
import { ref } from "vue";
import Forms from "./Forms/Forms.vue";
import Lists from "./Lists/Lists.vue";
import { inject } from "vue"

const {data,save,remove} = inject("data");

</script>

<template>
  <div>
    <h1 class="text-center">Page user</h1> 
    <Forms @save="save"></Forms> 
    <Lists :data="data" @remove="remove"></Lists>
  </div>
</template>