<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>
<template>
  <!-- <button @click="checkVal">chccccc</button> -->
  <Transition>
  <v-progress-linear
     v-if="loading"
      v-model="progress"
      height="25"
      color="red"
    >
      <strong>{{ progress }}%</strong>
    </v-progress-linear>
  </Transition>
  <ComposePostPreviewFiles
    v-if="source.length > 0 || videoSrc.length > 0"
    :source="source"
    :videoSrc="videoSrc"
    @deletePicture="deletePicture"
  />
  <!-- <div v-if="source" class="flex flex-wrap">
    <div
      v-for="(src, i) in source"
      :key="src"
      class="min-h-[50px] w-fit relative drop-shadow-md"
    >
      <v-icon @click="deletePicture(i)" color="black" class="absolute right-0"
        >mdi-close</v-icon
      >
      <img class="h-[150px]" height="50px" :src="src" alt="" />
    </div>
  </div>
  <div v-if="videoSrc" class="flex flex-wrap">
    <div
      v-for="(vidSrc, i) in videoSrc"
      :key="vidSrc"
      class="min-h-[50px] w-fit relative drop-shadow-md"
    >
      <v-icon @click="deletePicture(i)" color="black" class="absolute right-0"
        >mdi-close</v-icon
      >
      <video autoplay controls class="myvideo" style="height:100%">
      <source :src="vidSrc" type="video/mp4" id="video_here">
      Your browser does not support HTML5 video.
      </video>
    </div>
  </div> -->
  <div class="flex items-center p-3 bg-zinc-600 pb-5 relative">
    <div class="imageUpload">
      <label for="file-input">
        <IconComponent
          class="mt-1"
          :props="{ name: 'mdi-image', color: 'var(--postIcon)' }"
        />
      </label>
      <input @input="checkFile" accept="image/*" id="file-input" class="hidden" type="file" />
    </div>
    <div class="imageUpload">
      <label for="videoInput">
        <IconComponent
          class="pl-2 mt-1"
          :props="{ name: 'mdi-video', color: 'var(--postIcon)' }"
        />
      </label>
      <input @input="checkFileVideo" 
      accept="video/*"
      id="videoInput" class="hidden" type="file" />
    </div>
    <IconComponent
      class="pl-2 rotate-90 ml-2"
      :props="{ name: 'mdi-poll', color: 'var(--postIcon)' }"
    />
    <IconComponent
      class="pl-1 mt-1 hover:-rotate-45 transition-all"
      :props="{ name: 'mdi-puzzle', color: 'var(--postIcon)' }"
    />
    <v-btn
      @click="compose"
      class="absolute right-6 top-3 normal-case rounded-lg font-semibold tracking-tight"
      color="#0284c7"
      :class="disable ? 'bg-gray-700 text-white' : ' '"
      :disabled="disable"
      :elevation="disable ? '0' : '5'"
      >{{ countDown }}</v-btn
    >
  </div>
</template>

<script setup>
import { usePostStore } from "~~/store/postStore";
const store = usePostStore();
const disable = computed(() => props.post);
const props = defineProps(["post"]);
const emit = defineEmits(["userPosted"]);
const photoData = ref([]);
const vidData = ref([]);
const allFiles = ref([]);
const uploadImageLoading = ref(false);
const loading = ref(false);
let interval = ref(null);
let countDown = ref("Post");
let source = ref([]);
let videoSrc = ref([]);
let progress = ref(0);
let allMedia = ref([]);
const config = useRuntimeConfig();

const compose = async () => {
  console.log(allMedia.value);
  if (allFiles.value.length > 0) {
    loading.value = true;
    const {imageData, videoData, media, emit, progress} = await useFile(allFiles.value)
    loading.value = progress;
    photoData.value = imageData;
    vidData.value = videoData;
    uploadImageLoading.value = emit;
    allMedia.value = media;
  } else {
    await store.composePost();
    emit("userPosted", true);
    countDown = ref(5);
    interval = setInterval(() => {
      countDown.value--;
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      countDown.value = "Post";
    }, 5000);
  }
};

watch(uploadImageLoading, async (val) => {
  if (val) {
    const data = {
      images: photoData.value,
      videos: vidData.value,
      media: allMedia.value,
    };
    await store.composePost(data);
    progress.value = 100;
    resetVals();
    console.log("after reset", allMedia.value);
    emit("userPosted", true);
    countDown = ref(5);
    interval = setInterval(() => {
      countDown.value--;
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      countDown.value = "Post";
    }, 5000);
    uploadImageLoading.value = false;
  }
});

const resetVals = () => {
  source.value = [];
  loading.value = false
  allFiles.value = [];
  allMedia.value = [];
  progress.value = 0;
  videoSrc.value = [];
}

const deletePicture = (index) => {
  source.value.splice(index, 1);
  allFiles.value.splice(index, 1);
  console.log('aaa', allFiles.value)
};


const checkFile = (e) => {
  const [file] = e.target.files;
  source.value.push(URL.createObjectURL(file));
  allFiles.value.push(file);
};

const checkFileVideo = (e) => {
  const [file] = e.target.files;
  if(file){
    allFiles.value.push(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      videoSrc.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }
};

const checkVal = () => {
  console.log(loading.value);
};
</script>
