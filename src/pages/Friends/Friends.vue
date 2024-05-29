<script setup>
import Divider from 'primevue/divider';
import ButtonPrime from "primevue/button"
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const store =useStore();

const router=useRouter();

const friends = computed(()=>store.getters.getFriends);

const users = computed(()=>store.getters.getUsers);

const deleteFriend = (email) => {
  const data = users.value.map((item, i) => {
    if (item.email === email) {
      item.friend = false;
    }
    return item
  });

  store.commit("setUsers", data);
}

const goToDetail = (item) => {
  router.push({ name: "Detail", query: item });
}

</script>

<template>
    <div>
        <h1 class="text-center">Liste des amis</h1>
        <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
            <template v-for="(item, index) in friends" :key="item.id">
                <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
                    <div>
                        <div class="font-medium text-3xl text-900">{{ item.name }} {{ item.username }}</div>
                        <div class="flex align-items-center text-700 flex-wrap">
                            <div class="mr-5 flex align-items-center mt-3">
                                <i class="pi pi-envelope mr-2"></i>
                                <span>{{ item.email }}</span>
                            </div>
                            <div class="mr-5 flex align-items-center mt-3">
                                <i class="pi pi-map-marker mr-2"></i>
                                <span>{{ item.city }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 lg:mt-0">
                        <ButtonPrime @click="goToDetail(item)" label="Details" class="mr-2" serverity="contrast">
                        </ButtonPrime>
                        <ButtonPrime @click="deleteFriend(item.email)" severity="danger" icon="pi pi-times" label="Supprimer amis"></ButtonPrime>
                    </div>
                </div>
                <template v-if="index < friends.length - 1">
                    <Divider />
                </template>
            </template>
            <template v-if="friends.length  === 0">
                <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center" >
                        <span className="text-blue-500 font-bold text-3xl">pas d'amis</span>
                        <h1 className="text-900 font-bold text-5xl mb-2">😓</h1>
                </div>
            </template>
        </div>
    </div>
</template>