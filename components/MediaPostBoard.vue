<style scoped></style>
<template>
  <div class="flex items-center p-3 bg-[#1f1e1e] pb-5 relative">
    <div></div>
    <IconComponent class="mt-1" :props="{ name: 'mdi-image' }" />
    <IconComponent class="pl-2 mt-1" :props="{ name: 'mdi-video' }" />
    <IconComponent class="pl-2 rotate-90 ml-2" :props="{ name: 'mdi-poll' }" />
    <IconComponent
      class="pl-1 mt-1 hover:-rotate-45 transition-all"
      :props="{ name: 'mdi-puzzle' }"
    />
    <v-btn 
    class="absolute right-6 top-3 normal-case rounded-lg font-semibold tracking-tight"
    color="#0284c7"
    :class="disable ? 'bg-gray-700 text-white'  : ' '  "
    :disabled="disable"
    :elevation="disable ? '0' : '5'"
    >POST</v-btn>
  </div>
</template>

<script setup>
const disable = ref(false);
</script>


