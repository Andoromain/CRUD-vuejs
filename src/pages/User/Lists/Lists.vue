<script setup>
import Button from "../../../components/Button/button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(["data"]);

const emit = defineEmits(["remove"]);

const remove = (e) => {
  emit("remove", e);
};

const goToDetail = (item) => {
  router.push({ name: "Detail", query: item  });
};
</script>

<template>
  <div>
    <h1>Lists</h1>
    <ul>
      <li v-for="(item, index) in data" :key="item.id">
        nom : {{ item.nom }} , prenom : {{ item.prenom }}, fonction :
        {{ item.fonction }}
        <Button @clicker="goToDetail(item)" name="Detail"></Button>
        <Button @clicker="remove(index)" name="Delete"></Button>
      </li>
    </ul>
  </div>
</template>
