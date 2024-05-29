<script setup>
import { useRouter } from "vue-router";
import ButtonPrime from "primevue/button"
import Divider from "primevue/divider"
import Avatar from "primevue/avatar"

const props = defineProps(["data"]);

const emit = defineEmits(["remove"]);

const remove = (e) => {
  emit("remove", e);
};

const router = useRouter();

</script>

<template>
  <div>
    <h1 class="text-center">Lists des Pokemons</h1>
    <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
      <template v-for="(item, index) in data" :key="item.id">
        <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
          <div>
            <Avatar :image="item.image" class="mr-2" size="xlarge" shape="circle" />
            <div class="font-medium text-3xl text-900">{{ item.name }}</div>
            <div class="flex align-items-center text-700 flex-wrap">
              <template v-for="(value,i) in item.apiTypes" :key="i">
                <div class="mr-5 flex align-items-center mt-3">
                  <i class="pi pi-tag mr-2"></i>
                  <span>{{ value.name }}</span>
                </div>
              </template>
            </div>
          </div>
          <div class="mt-3 lg:mt-0">
            <!-- <ButtonPrime v-if="!item.friend" @click="addFriend(item.email)" label="Ajouter ami" class="p-button-outlined mr-2"
              icon="pi pi-user-plus"></ButtonPrime> -->
            <!-- <ButtonPrime @click="goToDetail(item)" label="Details" class="mr-2" serverity="contrast"></ButtonPrime> -->
            <ButtonPrime @click="remove(item.id)" severity="danger" icon="pi pi-times" label="Supprimer">
            </ButtonPrime>
          </div>
        </div>
        <template v-if="index < data.length - 1">
          <Divider />
        </template>
      </template>
      <template v-if="data && data.length === 0">
        <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center">
          <span className="text-blue-500 font-bold text-2xl">Aucun pokemon</span>
        </div>
      </template>
    </div>

  </div>
</template>
