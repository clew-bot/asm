<template>
  <div ref="element" class="observer">
  </div>
  <div v-if="loading" class="flex justify-center p-7">  <v-progress-circular
      :size="40"
      :width="6"
      color="black"
      indeterminate
    ></v-progress-circular></div>
</template>

<script setup>
import { set } from "mongoose";
import { usePostStore } from "~~/store/postStore";
const store = usePostStore();
const loading = ref(false);

onMounted(() => {
  console.log("mounted");
  const observedElement = document.querySelector(".observer");
  console.log(observedElement);
  if (!store.$state.postsFull) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          store.$state.pageCount++;
          loading.value = true;
          setTimeout(async() => {
            const posts = await store.getPosts();
          if (posts.length === 0) {
            loading.value = false;
            console.log("yeah i'm done here");
            store.$state.postsFull = true;
            observer.unobserve(observedElement);
          }
           
            console.log('fdfdfdfd')
          }, 500);

    
        } else {
        }
      });
    });
    observer.observe(observedElement);
  }

  // const element = ref("");
  // const observer = new IntersectionObserver(
  //     (entries) => {
  //         entries.forEach((entry) => {
  //             if (entry && entry.isIntersecting) {
  //                 console.log('intersecting')
  //                 // store.getMoreStatus();
  //             }
  //         }, );
  //     },

  //     {
  //         root: element.value,
  //         rootMargin: "0px 0px 100% 0px",
  //     }
  // );
  //     observer.observe(element.value);
});
// console.log(element.value)
// observer.observe(element.value);
</script>

<style lang="scss" scoped></style>
