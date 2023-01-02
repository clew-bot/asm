<template>
  <v-card><div class="flex items-center gap-2 border-b-2 border-red-400">
    <NuxtLink to="/messages">
    <IconComponent :props="{ name: 'mdi-arrow-left' }"/>
    </NuxtLink> 
    <div class="uppercase font-bold text-2xl text-green">Now Chatting with {{ username }}</div>
  </div>
    <div v-for="message in props" :key="message">
      <div class="flex p-2 items-start gap-2" :class="setUserCss(message)">
        <NuxtLink :to="`/profile/${message.owner.handleName}`">
          <v-avatar>
            <img :src="message.owner.profilePicture" alt="avatar" />
          </v-avatar>
        </NuxtLink>
          <div
            class="talk-bubble tri-right left-top"
            :class="setUserCssChat(message)"
          >
            <div class="talktext font-bold z-10 text-black">
              <p>{{ message.content }}</p>
              <span class="text-sm font-extralight">{{   createdAtLog(message.createdAt)  }}</span>
            </div>
        </div>
      </div>
    </div>
    <v-textarea
      v-model="message"
      :label="`Message ${props[0].owner.handleName}...`"

      rows="2"
      @keyup.enter="sendMessage"></v-textarea>
  </v-card>
</template>

<script setup>
import { useUserStore } from "~~/store/userStore";
const userStore = useUserStore();
const { props } = defineProps(["props"]);
const route = useRoute();
const username = route.params.id;

console.log("props: ", props);
console.log("userStore: ", userStore.$state.userId);

// socket.value = ctx.$nuxtSocket({})

const setUserCss = (message) => {
  if (message.owner._id === userStore.$state.userId) {
    return "justify-start flex-row-reverse ";
  } else {
    return "";
  }
};

const setUserCssChat = (message) => {
  if (message.owner._id === userStore.$state.userId) {
    return "tri-right border right-top";
  } else {
    return "";
  }
};
</script>

<style scoped>
.talk-bubble {
  /* margin: 40px; */
  display: inline-block;
  position: relative;
  padding: 11px;
  height: auto;
  background-color: #f2f3f3;
  margin-left: 10px;
  border-radius: 20px;

}
.tri-right.left-top:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: -20px;
  right: auto;
  top: 0px;
  bottom: auto;
  border: 22px solid;
  border-color: #f2f3f3 transparent transparent transparent;
}

.tri-right.border.right-top:before {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: auto;
  right: -40px;
  top: -10px;
  bottom: auto;
  border-color: #f2f3f3 transparent transparent transparent;
}
.tri-right.right-top:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: auto;
  right: -14px;
  top: -1px;

  bottom: auto;
  border: 20px solid;
  border-color: #f2f3f3 transparent transparent transparent;
}
</style>
