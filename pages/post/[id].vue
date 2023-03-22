<style scoped></style>
<template>
  <NuxtLayout name="dash">
    <template #header>Post</template>
    <template #rightSide><LayoutRightBarSuggested /></template>

    <!-- <div v-else class="flex justify-center items-center h-screen">
      <v-progress-circular
        :width="4"
        color="yellow"
        indeterminate
      ></v-progress-circular>
    </div> -->
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePostStore } from '~~/store/postStore';
import { useUserStore } from "~~/store/userStore";
const store = useUserStore();
const postStore = usePostStore();
const dto = ref(null);
const router = useRouter();
const handleName = router.currentRoute.value.params.id;
const userStore = useUserStore();
const { refresh } = storeToRefs(postStore);
const name = ref('');
const refresher = ref(0)
const userPosts = ref(null);
const pinnedPost = ref(null);
const friends = ref(null);


onMounted(() => {
    console.log("mounted")
    //Make request to get post associated with id
})

definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>
