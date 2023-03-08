<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>Messages</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <div>
      <!-- <MessagesMessageUsers :props="props"/> -->
      <MessagesPrivateMessages :props="response"/>
    </div>
</NuxtLayout>

</template>

<script setup>
import { useMessageStore } from '~~/store/messageStore';
const messageStore = useMessageStore();

const route = useRoute();
console.log(route.params.id)
const userHandle = route.params.id;

const response = await messageStore.getPrivateMessages(userHandle);
console.log(response)

definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

