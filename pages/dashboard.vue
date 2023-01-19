<template>
  <NuxtLayout name="dash">
    <template #header>HOME</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <template #postStatus><ComposeDashPost :reset="isReset" @updatePost="getValue"/></template>

    <template #postMedia><ComposePostMediaPostBoard :post="isDisabled" @user-posted="askForRefresh"/></template>
    <div v-if="!loading && posts.length > 0" class="first overflow-auto transition-all bg-zinc-600">
   
      <StatusUserStatus  v-model="posts"/>
      <div class="bg-[#343438]">
      <StatusObserver />
    </div>
    </div>
    <div v-else-if="loading">
        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
    </div>
    <div v-else-if="posts.length === 0 && !loading"
    class="text-center text-3xl font-semibold text-orange-400
    pt-10">
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
const isDisabled = ref(true);
const isReset = ref(false);
const posts = ref([]);
const loading = ref(true);
definePageMeta({
  layout: false,
  middleware: ["auth"],
});

onMounted( async () => {
  scrollTo(0,0);
  const allPosts = await store.getPosts();
  await nextTick(()=> {
    if(allPosts.length === 0) {
    loading.value = false;
  } else {
    loading.value = false;
  }
  });
  posts.value = store.$state.posts;

});

const getValue = (val) => {
  //convert to if else
  if (val.length === 0 || !store.pollOk) {
    isDisabled.value = true;
  } 
  else {
    isDisabled.value = false;
  }
  // val.length === 0 ? isDisabled.value = true : isDisabled.value = false;
};

const askForRefresh = async (value) => {
  isReset.value = true;
  setTimeout(() => {
  isReset.value = false;
  }, 5000);
  // await store.getPosts();
  await nextTick(() => {
    // posts.value = store.$state.posts;
    isDisabled.value = true;
  }); 
}
</script>

