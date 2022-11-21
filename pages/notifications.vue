<template>
    <NuxtLayout name="dash">
        <template #header>Notifications</template>
            Hello
    </NuxtLayout>
     
    <div>
        hi
    </div>
</template>

<script setup>
onMounted(() => {
  console.log("mounted");
});
definePageMeta({
  layout: "false",
});
</script>

<style lang="scss" scoped>


</style>