<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>{{handleName}}'s Profile</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <div>
      <ProfileHeader/>
      <div v-if="dto">
     <ProfileComponent :props="dto"/>
    </div>
    <div v-if="dto">
     <ProfilePostsAndFriends v-model="dto"/>
    </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useUserStore } from '~~/store/userStore';
const store = useUserStore();
const dto = ref(null);
const router = useRouter();
const handleName = router.currentRoute.value.params.id;

onMounted(async () => {

  const data = await store.getProfileInfoForUser(handleName);
    if(store.$state.userId === data._id){
    router.push('/profile')
  } else {
    dto.value = data;
  }
  // Add friends to store
});
definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

