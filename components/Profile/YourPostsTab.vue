<style scoped>

</style>
<template>
    <div v-if="posts !== undefined">
        <StatusUserStatus v-model="posts" :pinnedPost="pinnedPost"/>
    </div>
</template>

<script setup>
import { useUserStore } from '~~/store/userStore';
const store = useUserStore();
const props = defineProps(['modelValue', 'pinnedPost'])
const posts = ref(props.modelValue)

onMounted(()=>{
    store.$state.posts = posts.value
})




</script>