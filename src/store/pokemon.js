export const pokemon = {
    state: {
        users: [],
    },
    getters: {
        getUsers(state) {
            return state.users;
        },

        getUsetById(state) {
            return (id) => {
                return state.users.find((user) => user.id === id);
            };
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        addUser(state, user) {
            state.users.push(user);
        },
        removeUser(state, id) {
            state.users = state.users.filter((user) => user.id !== id);
        },
        updateUser(state, user) {
            const index = state.users.findIndex((u) => u.id === user.id);
            state.users.splice(index, 1, user);
        },
    },
    actions: {
        async fetchUsers(context) {
            const { data } = await fetch(API.base_url + API.users);
            context.commit("setUsers", data.data);
        },
    },
}