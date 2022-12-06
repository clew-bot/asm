<style scoped>

</style>
<template>
    <div v-if="posts !== undefined">
        <StatusUserStatus v-model="posts"/>
    </div>
</template>

<script setup>
import { useUserStore } from '~~/store/userStore';
const store = useUserStore();
const props = defineProps(['modelValue'])
const posts = ref(props.modelValue)

onMounted(()=>{
    store.$state.posts = posts.value
})

console.log('111', posts.value)



</script>