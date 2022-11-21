<template>
    <NuxtLayout name="dash">
      <template #header>Bookmarks</template>
      <template #rightSide><RightBarSuggested/></template>

      <div>
          Bookmarks
      </div>
  </NuxtLayout>

</template>

<script setup>
definePageMeta({
layout: false,
});
</script>

<style lang="scss" scoped>

</style>