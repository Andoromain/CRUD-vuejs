<script setup>
import Button from "../../../components/Button/button.vue";
import { ref } from "vue";

const emit = defineEmits(["save"]);

const name = ref('')
const username = ref('')
const email = ref('')
const city = ref('')

const reset = () => {
  name.value = '';
  username.value = '';
  email.value = '';
  city.value = '';
}

const submit = () => {
  if (!name.value || !username.value || !email.value || !city.value) return alert("Veuillez remplir tous les champs");

  const data = {
    name: name.value,
    username: username.value,
    email: email.value,
    city: city.value,
    friend:false,
  }

  emit("save", data);

  reset();
};

</script>

<template>
  <form @submit.prevent="submit">
    <div class="p-fluid formgrid grid w-8 mx-auto">
      <div class="field col-12 md:col-6">
        <input type="text" required v-model="name" class="p-inputtext" placeholder="Name" />
      </div>
      <div class="field col-12 md:col-6">
        <input type="text" required v-model="username" class="p-inputtext" placeholder="Username" />
      </div>
      <div class="field col-12 md:col-6">
        <input type="email" required v-model="email" class="p-inputtext" placeholder="Email" />
      </div>
      <div class="field col-12 md:col-6">
        <input type="text" required v-model="city" class="p-inputtext" placeholder="City" />
      </div>
        <Button type="submit" name="Ajouter" ></Button>
    </div>
  </form>
</template>
