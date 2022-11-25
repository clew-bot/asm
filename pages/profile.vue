<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>My Profile</template>
    <template #rightSide><RightBarSuggested/></template>
    <div>
     <ProfileHeader/>
     <ProfileComponent/>
     <ProfilePostsAndFriends/>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
layout: false,
});
</script>

