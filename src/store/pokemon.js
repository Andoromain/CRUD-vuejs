import { API } from "../constantes";
import { Get } from "@/Http"

export const pokemon = {
    state: {
        pokemons: [],
    },
    getters: {
       getPokemons: (state) => state.pokemons,
    },
    mutations: {
        setPokemons(state, pokemons) {
            state.pokemons = pokemons;
        },
    },
    actions: {
        async fetchPokemons({ commit }) {
            const {data} = await Get({url:`${API.base_url_pokemon}${API.pokemons}`});
            console.log(data)
            if(data){
                commit("setPokemons", data.data);
            }
        }
    },
}