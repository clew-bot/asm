<template>
  <div>
<h2 class="text-center text-5xl font-bold">Nuxt 3</h2>
  <!-- <FluidPlayer/> -->
  </div>
</template>

<script setup>
import Login from "~~/components/Login.vue";
// import FluidPlayer from "@/components/FluidPlayer.vue";
import Test from "@/components/Test.vue";

</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>