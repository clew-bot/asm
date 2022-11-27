<style scoped></style>
<template>
  <div class="flex items-center p-3 bg-[#1f1e1e] pb-5 relative">
    <div></div>
    <IconComponent class="mt-1" :props="{ name: 'mdi-image', color: 'var(--blue)' }" />
    <IconComponent class="pl-2 mt-1" :props="{ name: 'mdi-video', color: 'var(--blue)' }" />
    <IconComponent class="pl-2 rotate-90 ml-2" :props="{ name: 'mdi-poll', color: 'var(--blue)' }" />
    <IconComponent
      class="pl-1 mt-1 hover:-rotate-45 transition-all"
      :props="{ name: 'mdi-puzzle', color: 'var(--blue)' }"
    />
    <v-btn 
    @click="compose"
    class="absolute right-6 top-3 normal-case rounded-lg font-semibold tracking-tight"
    color="#0284c7"
    :class="disable ? 'bg-gray-700 text-white'  : ' '  "
    :disabled="disable"
    :elevation="disable ? '0' : '5'"
    >POST</v-btn>
  </div>
  <button @click="checkProp">chccccc</button>
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const disable = computed(() => props.post);
const entry = ref(store.$state.post)

const props = defineProps(['post'])

console.log(props)

const checkProp = () => {
  console.log(props.post)
}

watchEffect(() => {
 console.log("hiii")
});

const compose = () => {
  store.composePost();
  // store.check();
};


</script>


