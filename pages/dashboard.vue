<template>
  <NuxtLayout name="dash">
    <template #header>HOME</template>
    <template #rightSide><RightBarSuggested/></template>
    <template #postStatus><DashPost :key="isReset" @updatePost="getValue"/></template>
    <template #postMedia><MediaPostBoard :post="ableToPost" @user-posted="askForRefresh"/></template>
    <div v-if="posts.length > 0">
      <UserStatus v-model="posts"/>
    </div>
    
    <button @click="getThePosts">dfdfdfd</button>

  </NuxtLayout>
</template>


<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const ableToPost = ref(true);
const isReset = ref(0);
const posts = ref(store.$state.posts);

definePageMeta({
  layout: false,
  middleware: ["auth"],
});

onMounted( async () => {
  await store.getPosts();
  await nextTick();
  posts.value = store.$state.posts;
});

watch(posts, (newVal) => {
  // console.log(newVal);
});

const getValue = (val) => {
  val.length === 0 ? ableToPost.value = true : ableToPost.value = false;
};

const askForRefresh = (value) => {
  store.$state.post = "";
  ableToPost.value = true;
  isReset.value++;
}
</script>

