<style lang="scss" scoped>

</style>
<template>
    <img :src="blob" alt="" class="absolute -top-20 right-40 -z-10 md:-top-80 md:right-80 lg:-top-80">
    <div class="text-2xl md:text-4xl lg:text-6xl xl:text-9xl font-extrabold border-r-2 border-b-2 rounded border-red-500 w-fit p-12">
        Hi, name
    </div>
    <div class="container m-auto">
       <div class="text-center font-bold pt-8">
        Let's find a username people can reach you at.
       </div>
    </div>
</template>

<script setup>
import blob from '@/assets/svg/blob.svg'
definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>

