<style scoped>

</style>

<template>
    <div v-if="!loading" >
    <div 
        v-for="comment in comments" :key="comment.id"
        class="flex items-center border-t-[.2px] border-t-[var(--dashBorder)] pb-3 relative">
        <div class="flex items-startrelative pt-3 pl-2 whitespace-normal">
           <v-avatar
           class="mt-2"
        size="35">
            <v-img
                src="https://cdn.jim-nielsen.com/ios/512/super-mario-run-2017-11-07.png"
                alt="John"
                class="cursor-pointer"
            >
            </v-img>
        </v-avatar>
        <div class="ml-2 z-10 w-full">
            <div>
                <div class="text-xs font-bold text-stone-300  pr-8 pb-2 pt-1">
                    <span class="cursor-pointer hover:underline">{{comment.author.username}}</span>
                    <span class="font-normal text-yellow-100 hover:no-underline cursor-default">&nbsp;{{comment.content}}</span>
                </div>
                <div class="flex text-xs gap-2 font-semibold">
                    <div class="text-sky-700 hover:underline cursor-pointer">Reply</div>
                    <div class="text-red-300 hover:underline cursor-pointer">Report</div>
                </div>
            </div>
    
        </div>
    </div>
    
  <IconComponent
    class="absolute right-4 top-3 cursor-pointer z-10"
    :props="{name: 'mdi-heart-outline', size: 'x-small', color: '#a3a3a3'}"/>
</div>
</div>

</template>

<script setup>
import { usePostStore } from '@/store/postStore'
const store = usePostStore();
const { props } = defineProps(['props'])
const loading = ref(true)
const comments = ref([])
onMounted( async () => {
    console.log("hi", props.id)
    const getComments = await store.getCommentsForPost(props.id)
    comments.value = getComments
    loading.value = false
})

</script>
