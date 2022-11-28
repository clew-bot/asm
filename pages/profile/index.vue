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
     <ProfilePostsAndFriends/>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useUserStore } from '~~/store/userStore';
const store = useUserStore();
const dto = ref(null);

onMounted(async () => {
  const data = await store.getProfileInfo();
  dto.value = data;
});


definePageMeta({
layout: false,
});


</script>

