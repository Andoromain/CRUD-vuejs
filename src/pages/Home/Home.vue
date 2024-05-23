<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
  watch,
  watchEffect,
} from "vue";

const message = ref("");

onBeforeMount(() => {
  console.log("before mount", performance.now());
});

onMounted(() => {
  console.log("mounted", performance.now());
});

onBeforeUpdate(() => {
  console.log("before update", performance.now());
});

onUpdated(() => {
  console.log("updated", performance.now());
});

onBeforeUnmount(() => {
  console.log("unmounted", performance.now());
});

const stopWatch = watch(
  [message],
  ([newValue], [oldValue]) => {
    console.log("watch", newValue, oldValue);
    console.log("watch", performance.now());
  },
  { deep: false, immediate: true , once:false}
);

watchEffect(() => {
  console.log("watchEffect", message.value);
  console.log("watchEffect", performance.now());
});

</script>

<template>
  <div>
    <h1>Bienvenue sur page home</h1>
    <p>echo "{{ message }}"</p>
    <input type="text" v-model="message" />
    <button @click="stopWatch">Stop</button>
  </div>
</template>
