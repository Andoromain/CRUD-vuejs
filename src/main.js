import router from './router'
import { createApp } from 'vue'
import 'primevue/resources/themes/aura-light-cyan/theme.css'
import "/node_modules/primeflex/primeflex.css"
import 'primeicons/primeicons.css'
import '@/style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import store from "./store"

const app = createApp(App);

app.use(PrimeVue).use(ToastService).use(router).use(store);

app.mount('#app')
