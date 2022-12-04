<style scoped>

</style>
<template>
    <div v-if="posts !== undefined">
        <StatusUserStatus v-model="posts"/>
    </div>
</template>

<script setup>
const props = defineProps(['modelValue'])
const posts = ref(props.modelValue)
console.log(posts.value)



</script>