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
     <ProfilePostsAndFriends :props="dto"/>
    </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { routerKey } from 'vue-router';
import { useUserStore } from '~~/store/userStore';
const store = useUserStore();
const dto = ref(null);
const dtoPosts = ref(null);

const router = useRouter();
const handleName = router.currentRoute.value.params.id;

onMounted(async () => {
  const data = await store.getProfileInfoForUser(handleName);
  dto.value = data;
  // Add friends to store
});
definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

