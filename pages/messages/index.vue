<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>Messages</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <div v-if="!loading">
      <MessagesMessageUsers :props="data"/>
    </div>
    <div v-else
    class="flex justify-center items-center h-screen relative">
      <v-progress-circular
        class="absolute top-48"
          :width="4"
          color="white"
          indeterminate
        ></v-progress-circular>
    </div>
</NuxtLayout>

</template>

<script setup>
import { useMessageStore } from '~~/store/messageStore';
const messageStore = useMessageStore();
const loading = ref(true)
const data = ref(null)

// console.log(await messageStore.getMyMessages())
onMounted(async () => {
  data.value = await messageStore.getMyMessages();
  const sorted = await data.value.getMyConversations.conversations.sort((a, b) => {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  loading.value = false;
});




definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

