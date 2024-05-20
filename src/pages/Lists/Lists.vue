<script setup>
import Button from "../../components/Button/button.vue";

const props = defineProps(["data"]);

const emit = defineEmits(["remove"])

const remove = (e) => {
    emit('remove', e);
};

</script>

<template>
  <div>
    <h1>Lists</h1>
    <ul>
      <li v-for="(item,index) in data" :key="item.id">
        nom : {{ item.nom }} , prenom : {{ item.prenom }}, fonction : {{ item.fonction }}
        <Button  @clicker="remove(index)" name="supprimer"></Button>
      </li>
    </ul>
  </div>
</template>