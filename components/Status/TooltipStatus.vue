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
  
      class="bg-zinc-900 h-[3rem] w-[12rem] rounded-lg shadow-lg flex justify-evenly items-center"
    >
      <v-icon color="#fde047" size="large" class="cursor-pointer"
        >mdi-emoticon-happy</v-icon
      >
      <v-icon class="cursor-pointer" color="#0891b2" size="25">
        mdi-thumb-up
      </v-icon>
      <v-icon class="cursor-pointer" color="#ef4444" size="large">
        mdi-hand-heart
      </v-icon>
      <v-icon class="cursor-pointer" color="#fffbeb" size="large">
        mdi-lightbulb-on
      </v-icon>
    </div>
  </div>
</template>

<script setup>
const hoverIconAnimation = ref({});




</script>