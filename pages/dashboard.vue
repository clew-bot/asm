<template>
  <NuxtLayout name="dash">
    <template #header>HOME</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <template #postStatus><ComposeDashPost :reset="isReset" @updatePost="getValue"/></template>
    <template #postMedia><ComposePostMediaPostBoard :post="ableToPost" @user-posted="askForRefresh"/></template>
    <div v-if="!loading && posts.length > 0" class="first overflow-auto transition-all bg-zinc-600">
      <StatusUserStatus v-model="posts"/>
    </div>
    <div v-else-if="loading">
        <!-- <div class="text-center text-xl font-bold pt-10">
          You have no new posts. Check back later.
        </div> -->
        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
    </div>
    <div v-else-if="posts.length === 0 && !loading"
    class="text-center text-3xl font-semibold text-orange-400
    pt-10">
        <!-- <div class="text-center text-xl font-bold pt-10">
          You have no new posts. Check back later.
        </div> -->
        There doesn't seem to be any posts here.
    </div>
    <div class="h-screen w-full flex justify-center font-semibold text-orange-500 relative"><div class="absolute bottom-0">
      Looks like you've reached the end 😂
    </div></div>
  </NuxtLayout>
</template>


<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const ableToPost = ref(true);
const isReset = ref(false);
const posts = ref([]);
const loading = ref(true);
definePageMeta({
  layout: false,
  middleware: ["auth"],
});

onMounted( async () => {
  const allPosts = await store.getPosts();
  console.log(allPosts);
  await nextTick(()=> {
    if(allPosts.length === 0) {
      console.log("hi")
    loading.value = false;
  } else {
    loading.value = false;
  }
  });
  posts.value = allPosts;

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

