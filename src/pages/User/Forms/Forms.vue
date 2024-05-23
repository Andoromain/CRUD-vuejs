<script setup>
import Button from "../../../components/Button/button.vue";
import { ref } from "vue";

const emit = defineEmits(["save"]);

const nom = ref('')
const prenom = ref('')
const fonction = ref('')

const reset=()=>{
  nom.value = '';
  prenom.value = '';
  fonction.value = '';
}

const submit = () => {
  if(!nom.value || !prenom.value || !fonction.value) return alert("Veuillez remplir tous les champs");
  
  const data = {
    nom:nom.value,
    prenom:prenom.value,
    fonction:fonction.value
  }
  
  emit("save", data);
  
  reset();
};

</script>

<template>
  <input type="text" v-model="nom" placeholder="Nom" />
  <input type="text" v-model="prenom" placeholder="Prenom" />
  <input type="text" v-model="fonction" placeholder="Fonction" />
  <Button @clicker="submit" name="Add"></Button>
</template>
