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
        <template #rightSide><RightBarSuggested/></template>
    Hello
</NuxtLayout>
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
import RightBarSuggested from "@/components/RightBarSuggested.vue";

import {useCounterStore} from "@/store/counterStore";
definePageMeta({
  layout: false,
});

const store = useCounterStore();
console.log(store.$state.name)
</script>

