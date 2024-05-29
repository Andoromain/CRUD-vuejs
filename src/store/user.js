export const user = {
    state: {
        users: [],
        loading:false,
    },
    getters: {
        getUsers(state) {
            return state.users;
        },

        getUsetByEmail(state) {
            return (id) => {
                return state.users.find((user) => user.email === email);
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
        removeUser(state, email) {
            state.users = state.users.filter((user) => user.email !== email);
        },
        updateUser(state, user) {
            const index = state.users.findIndex((u) => u.email === user.email);
            state.users.splice(index, 1, user);
        },
    },
    actions: {
        async fetchUsers(context) {
            const { data } = await fetch(API.base_url + API.users);
            if (data.data) {
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
        },
    },
}