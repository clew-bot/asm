<style scoped></style>
<template>
  <NuxtLayout name="dash">
    <template #header>{{ handleName }}'s Profile</template>
    <template #rightSide><LayoutRightBarSuggested /></template>
    <div v-if="dto">
      <ProfileHeader :props="dto.coverPicture" />
      <ProfileComponent :props="dto" />
      <ProfilePostsAndFriends :key="refresher" :username="name" v-model="userPosts"/>
    </div>
    <div v-else class="flex justify-center items-center h-screen">
      <v-progress-linear
      indeterminate
      color="green"
    ></v-progress-linear>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePostStore } from '~~/store/postStore';
import { useUserStore } from "~~/store/userStore";
const store = useUserStore();
const postStore = usePostStore();
const dto = ref(null);
const router = useRouter();
const handleName = router.currentRoute.value.params.id;
const userStore = useUserStore();
const { refresh } = storeToRefs(postStore);
const name = ref('');
const refresher = ref(0)
const userPosts = ref(null);


watch(refresh, async (val) => {
  const newPosts = await userStore.getProfileInfo(handleName);
  dto.value = newPosts;
  refresher.value++
})
onMounted(async () => {
  const data = await store.getProfileInfoForUser(handleName);
  dto.value = data;
  userPosts.value = data.posts;
  name.value = data.username;
  //   if(store.$state.userId === data._id){
  //   router.push('/profile')
  // } else {

  // }
  // Add friends to store
});
definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>
