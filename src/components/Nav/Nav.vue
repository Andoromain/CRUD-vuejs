<script setup>
import { inject, ref } from "vue";
import { ROUTES } from "../../constantes/index.js"
import Menubar from 'primevue/menubar';
import { useRouter } from 'vue-router';

import InputText from 'primevue/inputtext';

const {search} = inject('data');

const router = useRouter();

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
            router.push(ROUTES.home);
        }
    },
    {
        label: 'Users',
        icon: 'pi pi-users',
        command: () => {
            router.push(ROUTES.user)
        }
    },
    {
        label: 'Friends',
        icon: 'pi pi-face-smile',
        command: () => {
            router.push(ROUTES.friends)
        }
    }
]);

</script>

<template>
    <nav>
        <Menubar :model="items" class="text-center">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                </a>
            </template>
            <template #end>
                <div class="flex align-items-center gap-2">
                    <InputText placeholder="Search" type="text" v-model="search"  class="w-8rem sm:w-auto" />
                </div>
            </template>
        </Menubar>
    </nav>
</template>
