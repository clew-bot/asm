<style scoped>
.icon-hover {
    cursor: pointer;
    transition: all 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
}
</style>
<template>
        <NuxtLayout name="dash">
    <template #header>HOME</template>
    Hello
</NuxtLayout>
  <h1>Yo!</h1>

</template>

<script setup>
import heart from "@/assets//svg/heart.svg";
import home from "@/assets//svg/home.svg";
import message from "@/assets//svg/message.svg";
import bell from "@/assets//svg/bell.svg";
import bookmark from "@/assets//svg/bookmark.svg";
import profile from "@/assets//svg/profile.svg";
import more from "@/assets//svg/more.svg";

import Navigation from "@/components/Navigation.vue";




definePageMeta({
  layout: "false",
});
</script>

