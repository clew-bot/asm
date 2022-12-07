<style scoped>
@import url("@/assets/css/animations.css");
</style>
<template>

  <TransitionGroup name="list">
    <div
      v-for="(status, i) in props.modelValue"
      :key="status._id"
      class="cont flex justify-center"
    >
      <!-- {{status.author}} -->
      <v-card
        elevation="0"
        color="#18181b"
        class="border-t-[.2px] rounded-none border-t-[var(--dashBorder)] bg-zinc-700 w-full"
      >
        <!-- {{status.author}} -->
        <v-card-title>
          <div class="flex justify-items-start pt-3">
            <NuxtLink :to="`/profile/${status.author.handleName}`">
            <StatusUserAvatar :props="status.author.profilePicture" />
            </NuxtLink>
            <div class="absolute left-16 top-4 ml-2 w-fit">
              <NuxtLink :to="`/profile/${status.author.handleName}`">
                <div
                  class="text-lg font-semibold text-white hover:text-blue-300 cursor-pointer"
                >
                  {{ status.author.username }}
                </div>
              </NuxtLink>
              <div class="text-xs text-gray-400 cursor-pointer">
                @{{ status.author.handleName }}
              </div>
            </div>

            <div
              class="text-slate-300 absolute top-5 right-6 text-xs cursor-default"
            >
              {{ regularDate(status.createdAt) }}
            </div>
            <div
              class="text-slate-500 absolute top-9 right-6 text-xs cursor-default"
            >
              {{ createdAtLog(status.createdAt) }}
            </div>
          </div>
        </v-card-title>
        <div class="flex flex-col gap-5">
          <v-card-text
            class="px-4 text-base text-white p-0 font-semibold"
            v-html="status.content"
          >
          </v-card-text>
          <div v-if="status.media">
            <StatusAllMediaPost v-model="status.media" />
          </div>
          <div class="flex justify-between">
            <div class="px-4 flex pt-10">
              <Transition>
                <div v-if="utilityObj[status._id]?.toolTip" class="relative">
                  <StatusTooltipStatus
                    @mouseenter="openTooltip(status._id)"
                    @mouseleave="closeTooltip(status._id)"
                    class="absolute -top-14 -left-3"
                  />
                </div>
              </Transition>
              <IconComponent
                @mouseleave="closeTooltip(status._id)"
                @mouseenter="openTooltip(status._id)"
                :props="{
                  name: 'mdi-heart',
                  color: 'var(--postIcon)',
                  size: 'default',
                }"
              />
              <IconComponent
                @click="openComments(i, status._id)"
                class="ml-3"
                :props="{
                  name: 'mdi-message',
                  color: 'var(--postIcon)',
                  size: 'default',
                }"
              />
            </div>
            <div class="flex pt-10">
              <IconComponent
                class="mr-2"
                :props="{ name: 'mdi-bookmark', color: 'var(--postIcon)' }"
              />
              <ClientOnly>
                <StatusPostMenu
                v-if="status.author._id === userId"
                :id="status._id"
              />
              </ClientOnly>
     
            </div>
          </div>
          <div class="flex px-4 pb-4">
            <span class="font-bold">{{ status.likeCount }}&nbsp;</span>
            Reactions •&nbsp;
            <span
              @click="openComments(i, status._id)"
              class="cursor-pointer font-bold"
              >{{ utilityObj[status._id]?.count || 0 }}&nbsp;</span
            >
            <span class="cursor-pointer" @click="openComments(i, status._id)"
              >Comments</span
            >
          </div>
        </div>
        <div v-if="i === Object.keys(props.modelValue).length - 1">
      
        </div>
        <div v-if="utilityObj[status._id]?.open">
          <StatusCommentInput
            @check-commented="checkCommented"
            :props="{
              id: status._id,
              key: i,
              profilePicture: status.author.profilePicture,
            }"
          />
          <div v-if="utilityObj[status._id]?.allComments">
            <StatusCommentPost
              v-model="utilityObj[status._id].allComments"
              :key="utilityObj[status._id].allComments"
              v-on:need-more-comments="getVal"
              :props="{ id: status._id }"
            />
          </div>
        </div>
      </v-card>
      <!-- <button @click="checkVal(status._id)">check</button> -->
    </div>
  </TransitionGroup>
</template>

<script setup>
import { createdAtLog, regularDate } from "@/utils/timeConvert";
import { usePostStore } from "@/store/postStore";
import { useUserStore } from "~~/store/userStore";
const userStore = useUserStore();
const store = usePostStore();
const props = defineProps(["modelValue"]);
const showMoreCommentLabel = ref(false);
let utilityObj = ref({});
let timeout;
const userId = ref(userStore.$state.userId);

const checkMatching = (id) => {
  if (utilityObj.value[id]) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkMatching(userId))
// console.log('myid', userId)
// console.log('utilityObj', utilityObj.value)

onMounted(() => {
  props.modelValue.forEach((status) => {
    utilityObj.value[status._id] = {
      showMoreCommentLabel: false,
      allComments: [],
      open: false,
      count: status.comments.length,
      toolTip: false,
    };
  });
});

const openTooltip = (id) => {
  if (utilityObj.value[id] === undefined) {
    utilityObj.value[id] = {
      showMoreCommentLabel: false,
      allComments: [],
      open: false,
      count: 0,
      toolTip: false,
    };
  }
  Object.keys(utilityObj.value).forEach((key) => {
    utilityObj.value[key].toolTip = false;
  });
  utilityObj.value[id].toolTip = true;
  clearTimeout(timeout);
};
const closeTooltip = (id) => {
  timeout = setTimeout(() => {
    utilityObj.value[id].toolTip = false;
  }, 1000);
};

const checkCommented = async (id, key, createdComment) => {
  const getComments = await store.getCommentsForPost(id);
  utilityObj.value[id].allComments = getComments;
  utilityObj.value[id].count = getComments.length;
};

const openComments = async (i, id) => {
  if (utilityObj.value[id] === undefined) {
    utilityObj.value[id] = {
      showMoreCommentLabel: false,
      allComments: [],
      open: true,
      count: 0,
      toolTip: false,
    };
  } else if (utilityObj.value[id].open === true) {
    utilityObj.value[id].open = false;
  } else {
    utilityObj.value[id].open = true;
  }
  const getComments = await store.getCommentsForPost(id);
  utilityObj.value[id].allComments = getComments;
};
const getVal = (arg) => {
  showMoreCommentLabel.value = arg;
};

// const checkVal = (id) => {
//     console.log(id)
//     console.log(allComments.value[id])
// }
</script>
