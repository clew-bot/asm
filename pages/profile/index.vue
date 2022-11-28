<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>My Profile</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
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

