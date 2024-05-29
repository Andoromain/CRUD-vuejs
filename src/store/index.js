import { createStore } from "vuex";
import { API } from "../constantes";
import createPeristedState from "vuex-persistedstate";
import {user} from "./user"
import { pokemon } from "./pokemon";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user:user,
    pokemon:pokemon
  },
  plugins: [createPeristedState()],
});
