<script setup>
    import { computed, onBeforeMount } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const pokemons = computed(() => store.getters.getPokemons);

    const fetchPokemons = ()=> {
        if(pokemons.value.length === 0) {
            store.dispatch('fetchPokemons');
        }
    }

    onBeforeMount(() => {
        fetchPokemons();
    });

</script>
<template>
    <div>test</div>
</template>