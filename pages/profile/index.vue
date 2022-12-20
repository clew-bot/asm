<style scoped></style>
<template>
  <NuxtLayout name="dash">
    <template #header>My Profile</template>
    <template #rightSide><LayoutRightBarSuggested /></template>
    <div v-if="dto">
      <ProfileHeader :props="dto.coverPicture" />
      <ProfileComponent :props="dto" />
      <ProfilePostsAndFriends :username="name" :pinnedPost="pinnedPost" v-model="profilePosts" />
    </div>
    <div v-else class="flex justify-center items-center h-screen">
      <v-progress-circular
        :width="4"
        color="white"
        indeterminate
      ></v-progress-circular>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostStore } from "~~/store/postStore";
import { useUserStore } from "~~/store/userStore";
const dto = ref(null);
const profilePosts = ref(null);
const postStore = usePostStore();
const userStore = useUserStore();
const { refresh } = storeToRefs(postStore);
const refresher = ref(0);
const name = ref("");
const pinnedPost = ref(null);

// watch(refresh, async (val) => {
//   const newPosts = await userStore.getProfileInfo();
//   dto.value = newPosts;
//   refresher.value++;
// });

onMounted(async () => {
  const data = await userStore.getProfileInfo();
 
  console.log("2121", data);
  name.value = data.username;
  pinnedPost.value = data.pinnedPost;
  profilePosts.value = userStore.$state.posts;
  dto.value = data;
  // Add friends to store
});

definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>
