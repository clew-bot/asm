<style scoped></style>
<template>
  <div v-if="source" class="w-1/2"><img height="50px" :src="source" alt=""></div>
  <div class="flex items-center p-3 bg-zinc-600 pb-5 relative">
    <div class="imageUpload">
      <label for="file-input">
      <IconComponent class="mt-1" :props="{ name: 'mdi-image', color: 'var(--postIcon)' }" />
    </label>
      <input @input="checkFile" id="file-input" class="hidden" type="file">
    </div>
    <IconComponent class="pl-2 mt-1" :props="{ name: 'mdi-video', color: 'var(--postIcon)' }" />
    <IconComponent class="pl-2 rotate-90 ml-2" :props="{ name: 'mdi-poll', color: 'var(--postIcon)' }" />
    <IconComponent
      class="pl-1 mt-1 hover:-rotate-45 transition-all"
      :props="{ name: 'mdi-puzzle', color: 'var(--postIcon)' }"
    />
    <v-btn 
    @click="compose"
    class="absolute right-6 top-3 normal-case rounded-lg font-semibold tracking-tight"
    color="#0284c7"
    :class="disable ? 'bg-gray-700 text-white'  : ' '  "
    :disabled="disable"
    :elevation="disable ? '0' : '5'"
    >{{countDown}}</v-btn>
  </div>
  <!-- <button @click="checkProp">chccccc</button> -->
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const disable = computed(() => props.post);
let countDown = ref("Post");
let source = ref("");
const props = defineProps(['post'])
const emit = defineEmits(['userPosted'])
let interval = ref(null);
const compose = () => {
  store.composePost();
  emit('userPosted', true)
  countDown = ref(5);
  interval = setInterval(() => {
    countDown.value--;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval)
    countDown.value = "Post"
  }, 5000);
};


const checkFile = (e) => {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    let [foo] = e.target.files
    console.log(foo)
    // getBase64(file)
    source.value = URL.createObjectURL(file)
    console.log(source.value)
}

let thumbsnap_api_key = '000025e537b9452d8255b4fab140f7f7';
function getBase64(file) {
    let formData = new FormData()
    formData.append('key', thumbsnap_api_key);
    formData.append('media', file);
    console.log(formData)
     saveImage(formData);
//    var reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = function () {
//     //  console.log(reader.result);
//     //  saveImage(formData);
//    };
//    reader.onerror = function (error) {
//      console.log('Error: ', error);
//    };
}

const saveImage = async (formData) => {
    const data = await useFetch('https://thumbsnap.com/api/upload', {
        method: 'POST',
        body: formData
    })
    console.log(data.data.value.data)

}

</script>


