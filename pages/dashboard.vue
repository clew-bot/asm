<template>
  <NuxtLayout name="dash">
    <template #header>HOME</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <template #postStatus><ComposeDashPost :reset="isReset" @updatePost="getValue"/></template>
    <template #postMedia><ComposePostMediaPostBoard :post="ableToPost" @user-posted="askForRefresh"/></template>
    <div v-if="posts.length > 0">
      <StatusUserStatus v-model="posts"/>
    </div>
    <div v-else-if="posts.length === 0">
        <div class="text-center text-xl font-bold pt-10">
          You have no new posts. Check back later.
        </div>
    </div>
    <div class="h-56 w-full"></div>
    
    <!-- <button @click="getThePosts">dfdfdfd</button> -->

  </NuxtLayout>
</template>


<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const ableToPost = ref(true);
const isReset = ref(false);
const posts = ref(store.$state.posts);
let interval = ref(null);
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
  //  console.log('ran', newVal);
});

const getValue = (val) => {
  val.length === 0 ? ableToPost.value = true : ableToPost.value = false;
};

const askForRefresh = async (value) => {
  store.$state.post = "";
  isReset.value = true;
  setTimeout(() => {
  isReset.value = false;
  }, 5000);
  await store.getPosts();
  posts.value = store.$state.posts;
  ableToPost.value = true;
    
}
</script>

