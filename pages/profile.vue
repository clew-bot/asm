<template>
  <NuxtLayout name="dash">
    <template #header>My Profile</template>
    <template #rightSide><RightBarSuggested/></template>

    <div>
        Profile
    </div>
</NuxtLayout>

</template>

<script setup>
definePageMeta({
layout: "false",
});
</script>

<style lang="scss" scoped>

</style>