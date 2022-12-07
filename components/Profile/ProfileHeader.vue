<style lang="scss" scoped>

</style>
<template>
  <div class="relative">
 <v-parallax
    :class="heightChange ? 'max-h-[20rem]' : 'max-h-[100rem]'"
    class="transition-all duration-500"
    :scale=".7"
    :src="props ? props : 'https://d33wubrfki0l68.cloudfront.net/8d79b89491cf9ef958be1386776dc937d39266be/1a630/img/particle_background.jpg'"
  ></v-parallax>
  <IconComponent
    :props="{name: 'mdi-chevron-down', size: 'default', color: 'white'}"
    class="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-zinc-600 rounded-full"
    :class="heightChange ? '' : 'rotate-180'"
    @click="heightChange = !heightChange"/>
  </div>
</template>

<script setup>


const {props} = defineProps(['props']);
const heightChange = ref(true)

const test = () => {
  heightChange.value = !heightChange.value
}
</script>
