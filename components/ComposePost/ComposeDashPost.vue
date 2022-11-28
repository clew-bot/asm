<style scoped>
@import url("@/assets/css/vuetifyOverrides.css");

</style>
<template>
    <div>
        <div class="text-container">
            <v-container fluid>
                <v-textarea
                v-model="userPost"
                variant="filled"
                label="Compose new post..."
                auto-grow
                rows="2"
                class="hover:bg-transparent"
                hide-details="true"
                ></v-textarea>
            </v-container>
        </div>
   
    </div>
    <!-- <button @click="checkValue">check</button> -->
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const userPost = ref("");

const emit = defineEmits(["updatePost"]);
const props = defineProps(['reset']);


const checkReset = computed(() =>  props.reset )

watch(checkReset, (newVal) => {
    if (newVal) {
    userPost.value = "";
    }
})

watch(userPost ,(newVal) => {
    console.log(checkReset.value)
    if(!checkReset.value) {
    emit("updatePost", userPost.value);
    store.$state.post = userPost.value;
    } else {
     
    }
})

</script>

