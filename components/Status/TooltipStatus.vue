<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}</style>
<template>
  <div>
    <div
  
      class="bg-zinc-900 h-[3rem] w-[12rem] rounded-xl flex justify-evenly items-center"
    >
      <v-icon color="#0284c7" size="large" class="cursor-pointer"
        >mdi-emoticon-happy-outline</v-icon
      >
      <v-icon class="cursor-pointer" color="#0284c7" size="large">
        mdi-thumb-up-outline
      </v-icon>
      <v-icon class="cursor-pointer" color="#0284c7" size="large">
        mdi-hand-heart-outline
      </v-icon>
      <v-icon class="cursor-pointer" color="#0284c7" size="large">
        mdi-lightbulb-on-20
      </v-icon>
    </div>
  </div>
</template>

<script setup>
const hoverIconAnimation = ref({});




</script>