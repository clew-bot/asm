<style scoped></style>
<template>
  <div v-if="showButtonsOrNot">
    <v-btn
    v-if="(!showFriendRequestSentBtn)"
    @click.prevent="sendFriendRequest"
    elevation="1"
    class="text-xs rounded-xl"
    color="#0369a1"
    prepend-icon="mdi-account-plus"
    :disabled="disabled"
  >
    Add friend</v-btn
  >
  <v-btn
  v-else-if="showFriendRequestSentBtn"
    elevation="1"
    class="text-xs rounded-xl"
    color="#0369a1"
    prepend-icon="mdi-check"
    disabled
  >
    Request Sent</v-btn
  >
</div>
<div v-else>
  <div class="font-bold text-blue-400 rounded-xl p-2 text-xl border-2">
    FRIENDS 😊
  </div>
</div>
</template>

<script setup>
import { useNotifStore } from "~~/store/NotifStore";
import { useUserStore } from "~~/store/userStore";

const userStore = useUserStore();
const notifStore = useNotifStore();
const props = defineProps(['props']);
const disabled = ref(false);

const showAddFriendBtn = ref(false);
const showFriendRequestSentBtn = ref(false);
const showButtonsOrNot = ref(false);
const myFriends = userStore.$state.friends;
const friRequestSent = userStore.$state.friendRequestsSent;
const myId = userStore.$state.userId;

onMounted(async() => {
  if(myFriends) {
    const isFriend = myFriends.find((friend) => friend === props.props.id);
    if (isFriend) {
      showButtonsOrNot.value = false;
    } else {
      showButtonsOrNot.value = true;
    }
  }

  if(friRequestSent.length > 0) {
    const isFriend = friRequestSent.find(
      (friend) => friend === props.props.id
    );
    if (isFriend) {
      console.log('is requested', isFriend)
      showFriendRequestSentBtn.value = true;
   
    } else {
      console.log('is not friend', isFriend)
      showAddFriendBtn.value = true;
    }
  }

});

const sendFriendRequest = (e) => {
  disabled.value = true;
  const data = {
    username: props.props.username,
    id: props.props.id,
  }
  notifStore.sendFriendRequest(data);

};
</script>

