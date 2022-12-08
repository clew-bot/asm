<style scoped></style>
<template>
  <NuxtLayout name="dash">
    <template #header>Notifications</template>
    <template #rightSide><LayoutRightBarSuggested /></template>

    <div v-if="(allNotifs.length > 0 && !loading)">
      <div>
        <NotificationsFriendRequest
          :props="friends"
          @accepted="refresh"
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

const refresh = async (data) => {
  console.log("in refresh", data.allNotifications.notifications);
  allNotifs.value = data.allNotifications.notifications;
  console.log("allNotifs", allNotifs.value);
  refresher.value++;
};

onMounted(async () => {
  console.log(friends)
  console.log("mounted from notifications.vue");
  const clearNotifs = userStore.clearNotifications();
  const getNotifs = notifStore.receiveNotifs();
  console.log(userStore.$state.friends)
  allNotifs.value = await getNotifs;
  setTimeout(() => {
    loading.value = false;
  }, 500);
});

definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>
