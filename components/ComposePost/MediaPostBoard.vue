<style scoped></style>
<template>
  <!-- <button @click="checkVal">chccccc</button>
  <button @click="getBase64">9999999</button> -->

  <div v-if="source" class="flex flex-wrap">
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
  <div class="flex items-center p-3 bg-zinc-600 pb-5 relative">
    <div class="imageUpload">
      <label for="file-input">
        <IconComponent
          class="mt-1"
          :props="{ name: 'mdi-image', color: 'var(--postIcon)' }"
        />
      </label>
      <input @input="checkFile" id="file-input" class="hidden" type="file" />
    </div>
    <IconComponent
      class="pl-2 mt-1"
      :props="{ name: 'mdi-video', color: 'var(--postIcon)' }"
    />
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
const allImages = ref([]);
const uploadImageLoading = ref(false);
let interval = ref(null);
let thumbsnap_api_key = "000025e537b9452d8255b4fab140f7f7";
let countDown = ref("Post");
let source = ref([]);

const compose = async () => {
  if (allImages.value.length > 0) {
    getBase64();
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
  console.log("second");
  if (val) {
    store.$state.images = photoData.value;
    console.log(store.$state.images);
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
});

const deletePicture = (index) => {
  source.value.splice(index, 1);
  allImages.value.splice(index, 1);
};

const checkFile = (e) => {
  const [file] = e.target.files;
  source.value.push(URL.createObjectURL(file));
  allImages.value.push(file);
};

const checkVal = () => {
  console.log(allImages.value);
  console.log(photoData.value);
};

async function getBase64() {
  let count;
  for (count = 0; count < allImages.value.length; count++) {
    let formData = new FormData();
    formData.append("key", thumbsnap_api_key);
    formData.append("media", allImages.value[count]);
    await saveImage(formData);
  }
  if (count == allImages.value.length) {
    console.log("first");
    uploadImageLoading.value = true;
  }
}

const saveImage = async (formData) => {
  const data = await useFetch("https://thumbsnap.com/api/upload", {
    method: "POST",
    body: formData,
  });
  console.log(data.data.value.data);
  photoData.value.push(data.data.value.data);
};
</script>
