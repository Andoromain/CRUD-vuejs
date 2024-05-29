<script setup>
import { ref, computed, onBeforeMount } from "vue";
import Forms from "./Forms/Forms.vue";
import Lists from "@/components/Lists/Lists.vue";
import { useStore } from "vuex";
import InputText from "primevue/inputtext";
import ProgressSpinner from "primevue/progressspinner";

const store = useStore();

const search = ref("");

const loading = computed(() => store.getters.getLoading);

const users = computed(() => store.getters.getUsers);

const save = (data) => {
  if (users.value.find((item) => item.email === data.email)) {
    alert("Email deja utilisé");
    return;
  }
  store.commit("addUser", data);
};

const remove = (e) => {
  store.commit("removeUser", e);
};

const fetchUsers = () => {
  if (users.value.length === 0) {
    store.dispatch("fetchUsers");
  }
};

onBeforeMount(() => {
  fetchUsers();
});

const filters = computed(() => {
  return users.value.filter((item) => {
    const match =
      item?.name.toLowerCase().includes(search.value.toLowerCase() ?? "") ||
      item?.username.toLowerCase().includes(search.value.toLowerCase() ?? "") ||
      item?.email.toLowerCase().includes(search
      .value.toLowerCase() ?? "") ||
      item?.city.toLowerCase().includes(search.value.toLowerCase() ?? "");
    return match;
  });
});

const addFriend = (param) => {
  const data = users.value.map((item, i) => {
    if (param === item.email) {
      item.friend = true;
    }
    return item
  });

  store.commit("setUsers", data);
}
</script>

<template>
  <div>
    <template v-if="loading">
      <div
        class="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
      >
        <ProgressSpinner style="width: 40px; height: 60px" strokeWidth="10" />
      </div>
    </template>
    <template v-else>
      <h1 class="text-center">Page user 
      </h1>
      
      <Forms @save="save"></Forms>

      <div class="flex align-items-center gap-2 justify-content-center my-2">
        <InputText
          placeholder="Search"
          type="text"
          v-model="search"
          class="w-8rem sm:w-auto"
        />
      </div>

      <Lists
        :data="search.length > 0 ? filters : users"
        @remove="remove" :addFriend="addFriend"
      ></Lists>
    </template>
  </div>
</template>
