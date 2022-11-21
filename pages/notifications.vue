<template>
    <NuxtLayout name="dash">
        <template #header>Notifications</template>
        <template #rightSide><RightBarSuggested/></template>

        <div>
          Hello World
        </div>
    </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  console.log("mounted");
});
definePageMeta({
  layout: false,
});
</script>

<style lang="scss" scoped>


</style>