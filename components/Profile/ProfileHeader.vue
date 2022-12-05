<style lang="scss" scoped>

</style>
<template>
 <v-parallax
    :scale=".7"
    :src="props ? props : 'https://d33wubrfki0l68.cloudfront.net/8d79b89491cf9ef958be1386776dc937d39266be/1a630/img/particle_background.jpg'"
  ></v-parallax>
</template>

<script setup>
const {props} = defineProps(['props']);
console.log(props)
</script>
