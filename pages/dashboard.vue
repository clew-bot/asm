<template>
  <NuxtLayout name="dash">
    <template #header>HOME</template>
    <template #rightSide><RightBarSuggested/></template>
    <template #postStatus><DashPost/></template>
    <template #postMedia><MediaPostBoard/></template>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: ["auth"],
});

</script>

