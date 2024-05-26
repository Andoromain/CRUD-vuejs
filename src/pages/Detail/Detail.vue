<script setup>
import { useRoute } from "vue-router"
import { useRouter } from "vue-router"
import { onBeforeMount, inject } from "vue"
import Button from "primevue/button";


const router = useRouter()
const route = useRoute()

const state = inject("location");

onBeforeMount(() => {
    if (Object.keys(route.query).length === 0) {
        router.go(-1)
    }
})

const goBack=()=>{
    router.go(-1)
}

</script>
<template>

    <div class="surface-section">
        <div class="grid mt-2">
            <div class="col-5 my-auto">
                <Button icon="pi pi-arrow-left" @click="goBack()" label="Retour"></Button>
            </div>
            <div class="font-medium text-3xl text-900 my-3 text-start col-7"> Details</div>
        </div>

        <div class="text-500 mb-5"></div>
        <ul class="list-none p-0 m-0">
            <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="w-6 md:w-2 flex justify-content-start">
                    <i class="pi pi-id-card"></i>
                </div>
                <div class="text-500 w-6 md:w-2 font-medium">Nom</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ route.query.name }}</div>

            </li>
            <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="w-6 md:w-2 flex justify-content-start">
                    <i class="pi pi-user"></i>
                </div>
                <div class="text-500 w-6 md:w-2 font-medium">Prenom</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1"> {{ route.query.username }}</div>
            </li>
            <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="w-6 md:w-2 flex justify-content-start">
                    <i class="pi pi-envelope"></i>
                </div>
                <div class="text-500 w-6 md:w-2 font-medium">Email</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ route.query.email }}</div>
            </li>
            <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                <div class="w-6 md:w-2 flex justify-content-start">
                    <i class="pi pi-map-marker"></i>
                </div>
                <div class="text-500 w-6 md:w-2 font-medium">Ville</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                    {{ route.query.city }}</div>
            </li>
        </ul>
    </div>
</template>