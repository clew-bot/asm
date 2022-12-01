<style scoped>
@import url("@/assets/css/vuetifyOverrides.css");

</style>
<template>
    <div class="relative">
        <div class="text-container">
            <v-container fluid>
                <!-- <v-textarea
                persistent-counter
                v-model="userPost"
                variant="filled"
                label="Compose new post..."
                auto-grow
                rows="2"
                class="hover:bg-transparent"
                hide-details="true"
                @click="focusDiv"
                ></v-textarea> -->
                 <v-textarea
                v-model="userPost"
                variant="filled"
                label="Compose new post..."
                auto-grow
                rows="2"
                color="yellow"
                class="bg-zinc-700"
                hide-details="true"
                ></v-textarea>
            </v-container>
        </div>
        <!-- <div contenteditable="true" ref="cloneUserPost" @input="handleInput" class="absolute top-0 w-full h-full border-2 z-99 text-base font-normal pt-[24px] px-[15.9px] pb-[6px]"></div> -->
   
    </div>
    <!-- <button @click="checkValue">check</button> -->
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const userPost = ref("");
const cloneUserPost = ref(null);
const clonedText = ref("");

const emit = defineEmits(["updatePost"]);
const props = defineProps(['reset']);

const checkReset = computed(() =>  props.reset )

watch(checkReset, (newVal) => {
    if (newVal) {
    userPost.value = "";
    }
})

watch(userPost ,(newVal) => {
    if(!checkReset.value) {
    emit("updatePost", userPost.value);
    store.$state.post = userPost.value;
    }
})

</script>

