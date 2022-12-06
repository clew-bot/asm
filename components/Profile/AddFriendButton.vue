<style scoped></style>
<template>
  <v-btn
  v-if="showAddFriendButton()"
    @click.prevent="sendFriendRequest"
    elevation="1"
    class="text-xs rounded-xl"
    color="#0369a1"
    prepend-icon="mdi-account-plus"
  >
    Add friend</v-btn
  >
  <div v-else>
    Friends!
  </div>
</template>

<script setup>
import { useNotifStore } from "~~/store/NotifStore";
import { useUserStore } from "~~/store/userStore";

const userStore = useUserStore();
const notifStore = useNotifStore();
const props = defineProps(['props']);

const myFriends = userStore.$state.friends;
const showAddFriendButton = () => {
  if (myFriends) {
    const isFriend = myFriends.find((friend) => friend._id === props.props._id);
    if (isFriend) {
      return false;
    } else {
      return true;
    }
  }
};

const myId = userStore.$state.userId;
console.log(myId);
console.log(userStore.$state.friends)
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

