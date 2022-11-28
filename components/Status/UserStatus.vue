<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
<template>
    <TransitionGroup name="list">
    <div v-for="status in props.modelValue" :key="status._id">
        <!-- {{status}} -->
        <v-card 
        elevation="4"
        color="#18181b"
        class=" mb-2">
            <v-card-title>
                <div class="flex justify-items-start pt-3">
                    <v-badge
                    color="green"
                    location="bottom right"
                    offset-x="5"
                    dot
                    bordered
                    >
                    <v-avatar
                    size="48">
                        <!-- <v-img
                            src=""
                            alt="John"
                            class="cursor-pointer"
                        >
                        </v-img> -->
                        <span class="text-h5">JD</span>
                    </v-avatar>
                </v-badge>
                    <div class="absolute left-16 top-4 ml-2 w-fit">
                        <div class="text-base font-semibold text-gray-300 cursor-pointer">
                            {{status.author.username}}
                        </div>
                        <div class="text-xs text-gray-400 cursor-pointer">
                            @{{status.author.handleName}}
                        </div>
                    </div>

                    <div class="text-slate-300 absolute top-5 right-6 text-xs cursor-default">
                        {{regularDate(status.createdAt)}}</div>
                    <div class="text-slate-500 absolute top-9 right-6 text-xs cursor-default">
                 
                        {{createdAtLog(status.createdAt)}}</div>
                </div>

            </v-card-title>
            <v-card-text class="text-base text-gray-200 pt-2">
                    {{status.content}}
                 
            </v-card-text>
            <div class="p-3">
                <div class="flex justify-between">
                    <div class="flex">
                        <IconComponent :props="{ name: 'mdi-heart', color: '#6b7280', size: 'default' }"/>
                        <IconComponent class="ml-3" :props="{ name: 'mdi-message', color: '#6b7280', size: 'default' }"/>
                    </div>
                    <div class="flex">
                        <IconComponent class="mr-2" :props="{ name: 'mdi-bookmark', color: '#6b7280' }"/>
                        <IconComponent class="mr-2" :props="{ name: 'mdi-dots-horizontal', color: '#6b7280' }"/>
                    </div> 
                    </div>
                </div>
                <div class="p-3">
                <div class="flex pb-2">
                    <span class="font-bold">{{status.likeCount}}&nbsp;</span>
                     Likes •&nbsp; 
                    <span class="font-bold">{{status.comments.length}}&nbsp;</span>
                    Comments   
                </div>
          
                </div>
                <StatusCommentPost/>
                <StatusCommentInput/>

                
        </v-card>

    </div>
</TransitionGroup>
</template>

<script setup>
import {createdAtLog, regularDate}  from "@/utils/timeConvert";
const props = defineProps(['modelValue'])
console.log(props.modelValue)

</script>

