<style scoped></style>
<template>
  <v-btn
    @click.prevent="sendFriendRequest"
    elevation="1"
    class="text-xs rounded-xl"
    color="#0369a1"
    prepend-icon="mdi-account-plus"
  >
    Add friend</v-btn
  >
</template>

<script setup>
import { useNotifStore } from "~~/store/notifStore";
const notifStore = useNotifStore();
const id = defineProps(['props']);


const sendFriendRequest = (e) => {
  console.log('send friend request', id);
  notifStore.sendFriendRequest(id.props);
};
</script>

