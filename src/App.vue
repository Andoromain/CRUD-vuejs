<script setup>
import Home from './pages/Home/Home.vue'
import Nav from './components/Nav/Nav.vue'
import { ref, provide, watch, onBeforeMount, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Get } from './Http/Http';
import ProgressSpinner from 'primevue/progressspinner';


const router = useRouter();

const data = ref([]);

const search = ref('');

const filters = ref([]);

const loading = ref(false);

const getUsers = () => {
  loading.value = true
  Get({ url: "users" }).then((response) => {
    console.log(response.data.data)
    if (response.data.data) {
      const temp = response.data.data.map((item) => {
        const newItem = {
          name: item.name,
          username: item.name,
          email: item.email,
          city: item.address.city,
          friend: false
        }
        return newItem
      });
      data.value = temp
    }
  }).finally(() => loading.value = false)
}

onBeforeMount(() => {
  getUsers();
})

const save = (e) => {
  if (data.value.find((item) => item.email === e.email)) {
    alert("Email deja utilisé")
    return
  }
  data.value = [...data.value, e];
}

const remove = (e) => {
  data.value = data.value.filter((item) => e != item.email)
}

const recherche = (text) => {
  filters.value = data.value.filter((item) => {
    const match = item?.name.toLowerCase().includes(text.toLowerCase() ?? '') || item?.username.toLowerCase().includes(text.toLowerCase() ?? '') || item?.email.toLowerCase().includes(text.toLowerCase() ?? '') || item?.city.toLowerCase().includes(text.toLowerCase() ?? '');
    return match;
  });
}

const addFriend = (param) => {
  data.value = data.value.map((item, i) => {
    if (param === item.email) {
      item.friend = true;
    }
    return item
  });
}

const deleteFriend = (email) => {
  data.value = data.value.map((item, i) => {
    if (item.email === email) {
      item.friend = false;
    }
    return item
  });
}

const goToDetail = (item) => {
  router.push({ name: "Detail", query: item });
};

watch(() => data, () => {
  recherche(search.value)
}, { immediate: true, deep: true });

watch(search, () => {
  recherche(search.value)
}, { immediate: true });

const friends = computed(()=>{
  return data.value.filter((item) => item.friend === true);
}) 

provide('data', { data: data, remove, save, addFriend, deleteFriend, goToDetail, friends , search,filters });


</script>

<template>

  <div class="surface-card p-4 shadow-2 border-round w-8 min-h-screen mx-auto my-auto">
    <template v-if="loading">
      <div class="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center">
        <ProgressSpinner style="width: 40px; height: 60px" strokeWidth="10" />
      </div>
    </template>
    <template v-else>
      <Nav />
      <router-view></router-view>
    </template>
  </div>
</template>