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
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';
const store = usePostStore();
const userPost = ref(store.$state.post);
const emit = defineEmits(["updatePost"]);
watch(userPost ,(newVal) => {
    // console.log("newVal", newVal);
    emit("updatePost", newVal);
    store.$state.post = newVal;
})

</script>

