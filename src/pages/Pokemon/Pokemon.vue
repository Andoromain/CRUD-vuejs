<script setup>
    import { computed, onBeforeMount } from 'vue';
    import { useStore } from 'vuex';
    import List from "./List/List.vue"

    const store = useStore();

    const pokemons = computed(() => store.getters.getPokemons);

    const fetchPokemons = ()=> {
        if(pokemons.value.length === 0) {
            store.dispatch('fetchPokemons');
        }
    }

    const removePokemon = (id)=>{
        store.commit('removePokemon',id)
    }

    onBeforeMount(() => {
        fetchPokemons();
    });

</script>
<template>
    <div>
        <List :data="pokemons" @remove="removePokemon"></List>
    </div>
</template>