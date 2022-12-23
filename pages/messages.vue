<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>Messages</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <div>
        Messages
    </div>
</NuxtLayout>

</template>

<script setup>
import { useMessageStore } from '~~/store/messageStore';
const messageStore = useMessageStore();

console.log(await messageStore.getMyMessages())
// const response = await messageStore.getMessageUsers();



definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

