import { API } from "../constantes";
import { Get } from "@/Http"

export const pokemon = {
    state: {
        pokemons: [],
        loading: false,
    },
    getters: {
       getPokemons: (state) => state.pokemons,
       getLoading: (state) => state.loading,
    },
    mutations: {
        setPokemons(state, pokemons) {
            state.pokemons = pokemons;
        },
        removePokemon(state,id){
            state.pokemons = state.pokemons.filter((item) => item.id !== id);
        },

        deleteAllPokemons(state){
            state.pokemons = [];
        },
        setLoading(state, loading) {
            state.loading = loading;
        },
    },
    actions: {
        async fetchPokemons({ commit }) {
            commit("setLoading", true);
            try{
                const {data} = await Get({url:`${API.base_url_pokemon}${API.pokemons}`});
                console.log(data)
                if(data){
                    commit("setPokemons", data.data);
                }
            }catch(e){
                console.error(e)
            }
            commit("setLoading", false);
        }
    },
}