<script setup>
import { computed, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import List from "./List/List.vue"
import InputText from "primevue/inputtext";

const store = useStore();

const search = ref("");

const pokemons = computed(() => store.getters.getPokemons);

const fetchPokemons = () => {
    if (pokemons.value.length === 0) {
        store.dispatch('fetchPokemons');
    }
}

const removePokemon = (id) => {
    store.commit('removePokemon', id)
}

onBeforeMount(() => {
    fetchPokemons();
});

const filters = computed(() => {
    return pokemons.value.filter((item) => {
        const nameMatch = item?.name.toLowerCase().includes(search.value.toLowerCase() ?? '') || item.apiTypes.some((type) => {
            return type.name?.toLowerCase().includes(search.value.toLowerCase())
        });

        return nameMatch;
    });
});

</script>
<template>
    <div>
        <div class="flex align-items-center gap-2 justify-content-center my-2">
            <InputText placeholder="Search" type="text" v-model="search" class="w-8rem sm:w-auto" />
        </div>
        <List :data="search.length > 0 ? filters : pokemons" @remove="removePokemon"></List>
    </div>
</template>