<style scoped>
</style>
<template>
    <NuxtLayout name="dash">
        <template #header>Notifications</template>
        <template #rightSide><LayoutRightBarSuggested/></template>

        <div v-if="(allNotifs.length > 0)">
          <NotificationsFriendRequest @accepted="refresh" :key="refresher" v-model="allNotifs"/>
        </div>
     
    </NuxtLayout>
</template>

<script setup>
import { useNotifStore } from "~~/store/NotifStore";
const notifStore = useNotifStore();
const allNotifs = ref([]);
const refresher = ref(0);

const refresh = async (data) => {
  console.log("in refresh", data.allNotifications.notifications);
  allNotifs.value = data.allNotifications.notifications;
  console.log("allNotifs", allNotifs.value);
  refresher.value++;
}

onMounted(async () => {
  console.log("mounted from notifications.vue");
  const getNotifs =  notifStore.receiveNotifs();
  allNotifs.value = await getNotifs;
});


definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

