<script setup>
import Input from "../../../src/components/Input/Input.vue";
import Button from "../../../src/components/Button/button.vue";
import { ref } from "vue";

const emit = defineEmits(["save"]);

const nom = ref('')
const prenom = ref('')
const fonction = ref('')

const setNom = (e) => {
  nom.value = e;
};

const setPrenom = (e) => {
  prenom.value = e;
};

const setFunction = (e) => {
  fonction.value = e;
};

const submit = () => {
  const data = {
    nom:nom.value,
    prenom:prenom.value,
    fonction:fonction.value
  }
    emit("save", data);
};
</script>

<template>
  <Input :value="nom" @change="setNom"></Input>
  <Input :value="prenom" @change="setPrenom"></Input>
  <Input :value="fonction" @change="setFunction"></Input>
  <Button @clicker="submit" name="Add"></Button>
</template>
