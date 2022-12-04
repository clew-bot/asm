<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>My Profile</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <div>
     <ProfileHeader/>
      <div v-if="dto">
     <ProfileComponent :props="dto"/>
    </div>
    <div v-if="dto">
     <ProfilePostsAndFriends :key="refresher" v-model="dto"/>
    </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePostStore } from '~~/store/postStore';
import { useUserStore } from '~~/store/userStore';
const dto = ref(null);
const postStore = usePostStore();
const userStore = useUserStore();
const { refresh } = storeToRefs(postStore);
const refresher = ref(0)


watch(refresh, async (val) => {
  const newPosts = await userStore.getProfileInfo();
  dto.value = newPosts;
  refresher.value++
})

onMounted(async () => {
  const data = await userStore.getProfileInfo();
  dto.value = data;
  // Add friends to store
});


definePageMeta({
layout: false,
middleware: ["auth"],
});


</script>

