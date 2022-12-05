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
import { useUserStore } from "~~/store/userStore";

const userStore = useUserStore();
const notifStore = useNotifStore();
const props = defineProps(['props']);

const myId = userStore.$state.userId;
console.log(myId);

console.log(props.props)
const sendFriendRequest = (e) => {
  console.log('send friend request', props.props.id);
  const data = {
    username: props.props.username,
    id: props.props.id,
  }
  notifStore.sendFriendRequest(data);
};
</script>

