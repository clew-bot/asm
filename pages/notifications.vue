<style scoped></style>
<template>
  <NuxtLayout name="dash">
    <template #header>Notifications</template>
    <template #rightSide><LayoutRightBarSuggested /></template>

    <div v-if="(allNotifs.length > 0 && !loading)">
      <div>
        <NotificationsFriendRequest
          :props="friends"
          
          :key="refresher"
          v-model="allNotifs"
        />
      </div>
    </div>
    <div v-else-if="loading" class="flex justify-center items-center h-screen relative">
        <v-progress-circular
        class="absolute top-48"
          :width="4"
          color="white"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else>
        <div class="flex justify-center items-center h-screen">
          <div class="text-white text-2xl">No notifications</div>
        </div>
      </div>
  </NuxtLayout>
</template>

<script setup>
import { useNotifStore } from "~~/store/NotifStore";
import { useUserStore } from "~~/store/userStore";
const userStore = useUserStore();
const notifStore = useNotifStore();
const allNotifs = ref([]);
const refresher = ref(0);
const loading = ref(true);
const friends = userStore.$state.friends;
console.log(allNotifs)
// const refresh = async (data) => {
//   // console.log("in refresh", data.allNotifications.notifications);
//   // allNotifs.value = data.allNotifications.notifications;
//   // console.log("allNotifs", allNotifs.value);
//   refresher.value++;
// };

const notificationNumber = notifStore.$subscribe((state) => {
    if(state.events.key === 'notifications') {
        allNotifs.value = state.events.newValue
    }
})

onMounted(async () => {
  const clearNotifs = userStore.clearNotifications();
  const getNotifs = await notifStore.receiveNotifs();
  allNotifs.value = notifStore.$state.notifications;
  setTimeout(() => {
    loading.value = false;
  }, 500);
});

definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>
