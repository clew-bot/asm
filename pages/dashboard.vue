<template>
  <NuxtLayout name="dash">
    <template #header>HOME</template>
    <template #rightSide><RightBarSuggested/></template>
    <template #postStatus><DashPost @updatePost="getValue"/></template>
    <template #postMedia><MediaPostBoard :post="ableToPost" @user-posted="askForRefresh"/></template>
    <UserStatus/>
    <button @click="getThePosts">dfdfdfd</button>

  </NuxtLayout>
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
definePageMeta({
  layout: false,
  middleware: ["auth"],
});

const ableToPost = ref(true);

const getThePosts = () => {
  store.getPosts();
}

const getValue = (val) => {
  val.length === 0 ? ableToPost.value = true : ableToPost.value = false;
};

const askForRefresh =() => {
  console.log("yes");
}


</script>

