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
const props = defineProps(['props'])
const posts = ref(props.props)

</script>