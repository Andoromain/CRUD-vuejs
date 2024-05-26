<script setup>
import Button from "@/components/Button/button.vue";
import { useRouter } from "vue-router";
import ButtonPrime from "primevue/button"
import Divider from "primevue/divider"
import { inject } from "vue";

const props = defineProps(["data"]);

const { addFriend, goToDetail } = inject("data")

const emit = defineEmits(["remove"]);

const remove = (e) => {
  emit("remove", e);
};

</script>

<template>
  <div>
    <h1 class="text-center">Lists des utilisateurs</h1>
    <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
      <template v-for="(item, index) in data" :key="item.id">
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
              <div v-if="item.friend" class="mr-5 flex align-items-center mt-3 text-red">
                <i class="pi pi-user mr-2"></i>
                <span>Amis</span>
              </div>
            </div>
          </div>
          <div class="mt-3 lg:mt-0">
            <ButtonPrime v-if="!item.friend" @click="addFriend(index)" label="Ajouter ami" class="p-button-outlined mr-2"
              icon="pi pi-user-plus"></ButtonPrime>
            <ButtonPrime @click="goToDetail(item)" label="Details" class="mr-2" serverity="contrast"></ButtonPrime>
            <ButtonPrime @click="remove(index)" severity="danger" icon="pi pi-times"></ButtonPrime>
          </div>
        </div>
        <template v-if="index < data.length - 1">
          <Divider />
        </template>
      </template>
      <template v-if="data.length === 0">
        <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center">
          <span className="text-blue-500 font-bold text-2xl">Aucun utilisateurs</span>
        </div>
      </template>
    </div>

  </div>
</template>
