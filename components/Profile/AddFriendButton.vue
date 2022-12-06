<style scoped></style>
<template>
    <v-btn
    v-if="showAddFriendBtn"
    @click.prevent="sendFriendRequest"
    elevation="1"
    class="text-xs rounded-xl"
    color="#0369a1"
    prepend-icon="mdi-account-plus"
  >
    Add friend</v-btn
  >
  <v-btn
  v-else-if="friRequestSent"
    elevation="1"
    class="text-xs rounded-xl"
    color="#0369a1"
    prepend-icon="mdi-check"
    disabled
  >
    Request Sent</v-btn
  >
</template>

<script setup>
import { useNotifStore } from "~~/store/NotifStore";
import { useUserStore } from "~~/store/userStore";

const userStore = useUserStore();
const notifStore = useNotifStore();
const props = defineProps(['props']);

const showAddFriendBtn = ref(false);
const showFriendRequestSentBtn = ref(false);
const myFriends = userStore.$state.friends;
const friRequestSent = userStore.$state.friendRequestsSent;
onMounted(async() => {
  // await userStore.getUser();
  console.log('fr', userStore.$state.friendRequestsSent)
  console.log('props', props)
  if(friRequestSent) {
    const isFriend = friRequestSent.find(
      (friend) => friend === props.props.id
    );
    if (isFriend) {
      console.log('is requested', isFriend)
      showFriendRequestSentBtn.value = false;
   
    } else {
      console.log('is not friend', isFriend)
      showAddFriendBtn.value = true;
    }
  }

});

// const showAddFriendButton = () => {
//   if (myFriends) {
//     const isFriend = myFriends.find((friend) => friend._id === props.props._id);
//     if (isFriend) {
//       console.log('is friend', isFriend)
//       return false;
//     } else {
//       return true;
//     }
//   }
// };


// const showFriendRequestSent = () => {
//   if (friRequestSent) {
//     const isFriend = friRequestSent.find(
//       (friend) => friend._id === props.props._id
//     );
//     if (isFriend) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

const myId = userStore.$state.userId;

const sendFriendRequest = (e) => {
  console.log('send friend request', props.props.id);
  const data = {
    username: props.props.username,
    id: props.props.id,
  }
  notifStore.sendFriendRequest(data);

};
</script>

