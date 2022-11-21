<template>
      <NuxtLayout name="dash">
        <template #header>Messages</template>
        <template #rightSide><RightBarSuggested/></template>

        <div>
            Messages
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