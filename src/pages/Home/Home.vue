<script setup>
import { ref } from "vue";
import Title from "../../components/Title/Title.vue";
import Inputs from "../Inputs/Inputs.vue";
import Lists from "../Lists/Lists.vue";

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
    <h1>Bienvenue sur page home</h1> 
    <Inputs @save="save"></Inputs> 
    <Lists :data="data" @remove="remove"></Lists>
  </div>
</template>
