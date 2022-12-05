<style scoped>
</style>
<template>
    <NuxtLayout name="dash">
        <template #header>Notifications</template>
        <template #rightSide><LayoutRightBarSuggested/></template>

        <div v-if="(allNotifs.length > 0)">
          <NotificationsFriendRequest v-model="allNotifs"/>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { useNotifStore } from "~~/store/notifStore";
const allNotifs = ref([]);

onMounted(async () => {
  const notifStore = useNotifStore();
  console.log('mounted', notifStore);
  const getNotifs =  notifStore.receiveNotifs();
  allNotifs.value = await getNotifs;
  console.log('allNotifs', allNotifs.value);
});


definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

