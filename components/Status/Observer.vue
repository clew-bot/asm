<template>
  <div ref="element" class="observer">
    Hi, I'm a bot! I'm here to help you with your code. I'm still in
    development, so please let me know if I'm not working as expected. I'm
    currently in beta, so I'm not always online. If you want to help me improve,
    please check out my source code on GitHub. If you have any questions, please
    contact my creator, @jakebathman.
  </div>
</template>

<script setup>
import { usePostStore } from "~~/store/postStore";
const store = usePostStore();

onMounted(() => {
  console.log("mounted");
  const observedElement = document.querySelector(".observer");
  console.log(observedElement);
  if (!store.$state.postsFull) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          store.$state.pageCount++;
          const posts = await store.getPosts();
          if (posts.length === 0) {
            console.log("yeah i'm done here");
            store.$state.postsFull = true;
            observer.unobserve(observedElement);
          }
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
