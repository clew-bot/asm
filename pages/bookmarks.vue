<style scoped>

</style>
<template>
    <NuxtLayout name="dash">
      <template #header>Bookmarks</template>
      <template #rightSide><LayoutRightBarSuggested/></template>

      <div>
          Bookmarks
      </div>
  </NuxtLayout>

</template>

<script setup>
definePageMeta({
layout: false,
middleware: ["auth"],
});
</script>

