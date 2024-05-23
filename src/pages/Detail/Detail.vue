<script setup>
    import {useRoute} from "vue-router"
    import {useRouter} from "vue-router"
    import {onBeforeMount, inject} from "vue"


    const router = useRouter()
    const route = useRoute()

    const state = inject("location");

    onBeforeMount(()=>{
        if(Object.keys(route.query).length === 0 ){
            router.go(-1)
        }
    })

    
    

</script>
<template>
    <div>
        <h1>Detail</h1>
        <p>Nom : {{ route.query.nom }}</p>
        <p>Prenom : {{ route.query.prenom }}</p>
        <p>Fonction : {{ route.query.fonction }}</p>
        {{  state  }}
    </div>
</template>