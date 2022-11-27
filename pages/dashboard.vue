<template>
  <NuxtLayout name="dash">
    <template #header>HOME</template>
    <template #rightSide><RightBarSuggested/></template>
    <template #postStatus><DashPost @updatePost="getValue"/></template>
    <template #postMedia><MediaPostBoard :post="ableToPost"/></template>
    <UserStatus/>

  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: ["auth"],
});

const ableToPost = ref(true);

const getValue = (val) => {
  if(val.length === 0){
    ableToPost.value = true;
  } else {
    ableToPost.value = false;
  }
  // console.log(ableToPost.value);
  // console.log('vddddal', val);

};


</script>

