<script setup>
import { ref } from "vue";


const title = 'Titre'

const props = defineProps({
  message: {
    type:String,
    required:true,
    default: 'Hello World'
  }
});

const inputValue = ref('')

// defineEmits(['update:message'])

const emit = defineEmits({
    "update:message": (value) => {
        console.log(value)
        return value;
    },
    "change": (value) => {
        // if(value.length > 5) {
        //     console.log('Value is too long')
        //     return false
        // }else{
            return true;
        // }
    }
})

const changer = (e) => {
    console.log(e.target.value)
    emit('change', inputValue.value);
}

console.log(props.message)

</script>

<template>
  <h2>{{ title }} : {{ message }}</h2>
    <input type="text" @input="changer" v-model="inputValue"/>
    <button @click="$emit('update:message', 'Hello')">Update</button>
</template>
