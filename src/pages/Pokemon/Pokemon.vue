<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import List from "./List/List.vue";
import InputText from "primevue/inputtext";
import { useRouter } from "vue-router";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";

const router = useRouter();

const store = useStore();

const search = ref("");

const pokemons = computed(() => store.getters.getPokemons);

const loading = computed(() => store.getters.getLoading);

const fetchPokemons = () => {
  if (pokemons.value.length === 0) {
    store.dispatch("fetchPokemons");
  }
};

const reload = () => {
  router.go(0);
};

const deleteAll = () => {
  store.commit("deleteAllPokemons");
};

const removePokemon = (id) => {
  store.commit("removePokemon", id);
};

onBeforeMount(() => {
  fetchPokemons();
});

const filters = computed(() => {
  return pokemons.value.filter((item) => {
    const nameMatch =
      item?.name.toLowerCase().includes(search.value.toLowerCase() ?? "") ||
      item.apiTypes.some((type) => {
        return type.name?.toLowerCase().includes(search.value.toLowerCase());
      });

    return nameMatch;
  });
});
</script>
<template>
  <div>
    <div class="flex align-items-center gap-2 justify-content-center my-2">
      <Button label="Supprimer tous" severity="danger" @click="deleteAll" />
      <Button label="Reload" @click="reload" />
    </div>
    <div class="flex align-items-center gap-2 justify-content-center my-2">
      <InputText
        placeholder="Search"
        type="text"
        v-model="search"
        class="w-8rem sm:w-auto"
      />
    </div>
    <template v-if="loading">
      <div
        class="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
      >
        <ProgressSpinner style="width: 40px; height: 60px" strokeWidth="10" />
      </div>
    </template>
    <template v-else>
      <List
        :data="search.length > 0 ? filters : pokemons"
        @remove="removePokemon"
      ></List>
    </template>
  </div>
</template>
