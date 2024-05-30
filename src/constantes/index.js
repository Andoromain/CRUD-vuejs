export const ROUTES = {
  home: "/",
  user: "/user",
  detail: "/detail",
  friends: "/friends",
  pokemons:"/pokemons",
};

export const API = {
  base_url_user: import.meta.env.VITE_APP_API_URL_USER,
  base_url_pokemon: import.meta.env.VITE_APP_API_URL_POKEMON,
  users: "users",
  pokemons:"pokemon/limit/30"
};
