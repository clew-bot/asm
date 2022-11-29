<style scoped>

</style>
<template>
  <NuxtLayout name="dash">
    <template #header>Messages</template>
    <template #rightSide><LayoutRightBarSuggested/></template>
    <div>
        Messages
    </div>
</NuxtLayout>

</template>

<script setup>
definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

