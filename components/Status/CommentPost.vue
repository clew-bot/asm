<style scoped>
/* .lastItem:last-child {
    border: solid 2px hotpink !important;
    background: red !important;
    z-index: 99 !important;
} */
</style>

<template>
  <div v-if="!loading">
    <div
      v-for="(comment, i) in comments"
      :key="comment.id"
      class="lastItem flex items-center border-t-[.2px] border-t-[var(--dashBorder)] pb-3 relative"
    >
      <div class="flex items-startrelative pt-3 pl-2 whitespace-normal">
        <v-avatar class="mt-2" size="35">
          <v-img
            src="https://cdn.jim-nielsen.com/ios/512/super-mario-run-2017-11-07.png"
            alt="John"
            class="cursor-pointer"
          >
          </v-img>
        </v-avatar>
        <div class="ml-2 z-10 w-full">
          <div>
            <div class="text-base font-bold text-stone-300 pr-8 pb-2 pt-1">
              <span
                class="cursor-pointer hover:underline hover:text-blue-500"
                >{{ comment.author.username }}</span
              >
              <span
                class="font-normal text-white-100 hover:no-underline cursor-default"
                >&nbsp;{{ comment.content }}</span
              >
            </div>
            <div class="flex text-sm gap-2 font-semibold">
              <div class="text-slate-700 hover:underline cursor-pointer italic">
                reply
              </div>
              <!-- <div class="text-red-300 hover:underline cursor-pointer">Report</div> -->
              <div class="text-sm text-gray-400 cursor-default">
                {{ createdAtLog(comment.createdAt) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <IconComponent
        class="absolute right-4 top-3 cursor-pointer z-10"
        :props="{
          name: 'mdi-heart-outline',
          size: 'x-small',
          color: '#a3a3a3',
        }"
      />
      <div></div>
      <div v-if="i === comments.length - 1">
        <!-- <v-btn class="">See more comments</v-btn> -->
      </div>
    </div>
  </div>
  <div v-else>
    <v-progress-linear indeterminate color="cyan"></v-progress-linear>
  </div>
  <div 
  v-if="comments.length >= 5"
  class="flex p-3 font-bold border-t-[.2px] border-t-[var(--dashBorder)]">
    <IconComponent
      :class="{ '-rotate-90': !loadMore }"
      class="mr-2 transition-all roate"
      :props="{
        name: 'mdi-arrow-right-bottom-bold',
        size: 'default',
        color: 'green',
      }"
    />
    <span
      @click="loadMoreComments"
      class="hover:text-green-500 cursor-pointer transition-all"
    >
      {{helperLabel}}
    </span>
  </div>
</template>

<script setup>
import { usePostStore } from "@/store/postStore";
const store = usePostStore();
const { props, value, modelValue } = defineProps([
  "props",
  "value",
  "modelValue",
]);
const loading = ref(true);
const comments = ref([]);
const emit = defineEmits(["needMoreComments"]);
const allComments = ref([]);
const loadMore = ref(false);
const globalSlice = ref(null)
console.log(value);

const helperLabel = computed((val) => {
    if(allComments.value.length <= 5 && !loadMore.value) {
        return "";
    } else if (allComments.value.length > 0 && loadMore.value) {
        return "Load more comments 💬";
    } else {
        return "That's the end!";
    }
})

console.log(props);
onMounted(async () => {
  const getComments = await store.getCommentsForPost(props.id);
  allComments.value = getComments;
  const sliceValue = getComments.length > 5 ? 5 : getComments.length;
  globalSlice.value = sliceValue
  comments.value = getComments.slice(0, sliceValue);
  await nextTick();
  getComments.length > 5 ? loadMore.value = true : loadMore.value = false
  loading.value = false;
});

const loadMoreComments = (val) => {
//   globalSlice.value = allComments.value.length
  comments.value = allComments.value.slice();
    loadMore.value = false;
};

// const checkValue = computed((val) => {
//     console.log('modelValue', modelValue)
//     console.log('val', val)
//     return modelValue
// })
</script>
