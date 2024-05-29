import { API } from "../constantes";
import {Get} from "@/Http"

export const user = {
    state: {
        users: [],
        loading:false,
    },
    getters: {
        getUsers(state) {
            return state.users;
        },

        getLoading(state) {
            return state.loading;
        },

        getFriends(state) {
            return state.users.filter((item) => item.friend === true);
        },

    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading;
        },
        setUsers(state, users) {
            state.users = users;
        },
        addUser(state, user) {
            state.users.push(user);
        },
        removeUser(state, email) {
            state.users = state.users.filter((user) => user.email !== email);
        },
    },
    actions: {
        async fetchUsers(context) {
            context.commit('setLoading',true)
            const { data } = await Get({url:`${API.base_url_user}${API.users}`});
        
            if (data) {
                const temp = data.data.map((item) => {
                  const newItem = {
                    name: item.name,
                    username: item.username,
                    email: item.email,
                    city: item.address.city,
                    friend: false
                  }
                  return newItem
                });
                context.commit("setUsers", temp);
            }
            context.commit('setLoading',false)
        },
    },
}