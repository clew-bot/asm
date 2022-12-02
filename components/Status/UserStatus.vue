<style scoped>
.list-enter-active {
    animation: slideFromUp .7s;
}
.list-leave-active {
  transition: all 1s ease;
 
}
.list-enter-from,
.list-leave-to {
  transform: translateY(-40px);
}

/* 
.v-enter-active {
    animation: slideFromUp 1s;
}

.v-leave-to {
    display: none;
} */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
    
}

@keyframes slideFromUp {
    0% {
        transform: translateY(-20%);
    }
    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(-7px);
    }
    75% {
        transform: translateY(0);
    }
}

@keyframes slideFromDown {
    0% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(-100%);
    }
}




</style>
<template>
    <TransitionGroup name="list">
    <div v-for="status, i in props.modelValue" :key="status._id" 
    class="flex justify-center"
    >
        <!-- {{status}} -->
        <v-card 
        elevation="0"
        color="#18181b"
        class="border-t-[.2px] rounded-none border-t-[var(--dashBorder)] bg-zinc-700 w-full">
        
            <v-card-title>
                <div class="flex justify-items-start pt-3 ">
                    <v-badge
                    color="green"
                    location="bottom right"
                    offset-x="5"
                    dot
                    bordered
                    >
                    <v-avatar
                    class="border-2"
                    size="48">
                        <!-- <v-img
                            src=""
                            alt="John"
                            class="cursor-pointer"
                        >
                        </v-img> -->
                        <span class="text-4xl">🐶</span>
                    </v-avatar>
                </v-badge>
                    <div class="absolute left-16 top-4 ml-2 w-fit">
                        <NuxtLink :to='`/profile/${status.author.handleName}`'>
                        <div class="text-lg font-semibold text-white hover:text-blue-300 cursor-pointer">
                            {{status.author.username}}
                        </div>
                    </NuxtLink>
                        <div class="text-xs text-gray-400 cursor-pointer">
                            @{{status.author.handleName}}
                        </div>
                    </div>

                    <div class="text-slate-300 absolute top-5 right-6 text-xs cursor-default">
                        
                        {{regularDate(status.createdAt)}}

                    </div>
                    <div class="text-slate-500 absolute top-9 right-6 text-xs cursor-default">
                 
                        {{createdAtLog(status.createdAt)}}</div>
                </div>

            </v-card-title>
        <div class="flex flex-col gap-5">
            <v-card-text
            class="px-4 text-base text-white p-0 font-semibold" 
            v-html="status.content">
            </v-card-text>
                <div v-if="(status.photos.length === 1)"
                    class="">
                    
                    <div class="flex flex-wrap gap-2 justify-center">
                        <div v-for="photo in status.photos" :key="photo._id" class="w-full bg-zinc-700">
                            <div class=""
                            :class="photo.width > 600 || photo.width < 250 ? '' : `border-t-[.2px] border-b-[.2px] border-[var(--dashBorder)]`">
                                <v-img
                            :src="photo.media"
                            class="m-auto cursor-pointer transition-all" 
                            :style="photo.width > 600 ? 'width: 100%' : `width: ${photo.width}px`"
                            >

                            </v-img>
                            </div>
                          
                        </div>
                    </div>
                </div>
            
                <v-carousel
                    v-else-if="status.photos.length > 1"
                        height="500"
                        hide-delimiter-background
                        :show-arrows=false
                        class="w-full"
                        color="grey"
                    >
                        <v-carousel-item
                        v-for="(slide, i) in status.photos"
                        :key="i"
                        class="w-full"
                        >
                        <v-sheet
                            height="100%"
                            class="w-full"
                        >
                            <div class="d-flex fill-height justify-center align-center">
                                <v-img
                                :src="slide.media"
                                >

                                </v-img>
                            </div>
                        </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                    <Transition>
                   
                </Transition>
                <div class="flex justify-between">
                    <div class="px-4 flex pt-10">
                        <Transition>
                        <div
                            v-if="toolTipObj[status._id]" class="relative">
                            <StatusTooltipStatus
                            @mouseenter="openTooltip(status._id)"
                            @mouseleave="closeTooltip(status._id)"
                            class="absolute -top-14 -left-3"
                            />
                        </div>
                        </Transition>
                        <IconComponent 
                        @mouseleave="closeTooltip(status._id)"
                        @mouseenter="openTooltip(status._id)"
                        :props="{ name: 'mdi-heart', color: 'var(--postIcon)', size: 'default' }"/>
                        <IconComponent @click="openComments(i, status._id)" class="ml-3" :props="{ name: 'mdi-message', color: 'var(--postIcon)', size: 'default' }"/>
                    </div>
                    <div class="flex pt-10">
                        <IconComponent class="mr-2" :props="{ name: 'mdi-bookmark', color: 'var(--postIcon)' }"/>
                        <IconComponent class="mr-2" :props="{ name: 'mdi-dots-horizontal', color: 'var(--postIcon)' }"/>
                    </div> 
                    </div>
                <div class="flex px-4 pb-4">
                    <span class="font-bold">{{status.likeCount}}&nbsp;</span>
                     Reactions •&nbsp; 
                    <span @click="openComments(i, status._id)" class="cursor-pointer font-bold">{{countObj[status._id] ? countObj[status._id] : '0'}}&nbsp;</span>
                    <span class="cursor-pointer " @click="openComments(i, status._id)">Comments</span>   
          
                </div>
            </div>
                <div 
                v-if="openObj[status._id]"
                >
                    <StatusCommentInput 
                    @check-commented="checkCommented"
                    :props="{id: status._id, key: i}"
                    />
                    <div v-if="allComments[status._id]">
                        <StatusCommentPost
                        v-model="allComments[status._id]"
                        :key="allComments[status._id]"
                        v-on:need-more-comments="getVal" 
                        :props="{id: status._id}"
                        />
                    </div>
                </div>               

        </v-card>
        <!-- <button @click="checkVal(status._id)">check</button> -->
    </div>
</TransitionGroup>
</template>

<script setup>
import {createdAtLog, regularDate}  from "@/utils/timeConvert";
import { usePostStore } from "@/store/postStore";
const store = usePostStore();
const props = defineProps(['modelValue'])
const showMoreCommentLabel = ref(false)
const allComments = ref([])
let openObj = ref({});
let countObj = ref({});
let toolTipObj = ref({});
let timeout;

onMounted(() => {
    props.modelValue.forEach((status) => {
        countObj.value[status._id] = status.comments.length
        toolTipObj.value[status._id] = false
    })
})

const test = (e) => {
    console.log('lol', e)
}

const openTooltip = (id) => {
    Object.keys(toolTipObj.value).forEach((key) => {
        toolTipObj.value[key] = false
    })
    toolTipObj.value[id] = true
    clearTimeout(timeout)
}
const closeTooltip = (id) => {
    timeout = setTimeout(() => {
        toolTipObj.value[id] = false
    }, 1000)
}

const checkCommented = async (id, key, createdComment) => {
    const getComments = await store.getCommentsForPost(id);
    allComments.value[id] = getComments;
    if (!countObj.value[id]) {
        countObj.value[id] = 1
    } else {
        countObj.value[id] += 1
    }
}

const checkVal = (id) => {
    console.log(id)
    console.log(allComments.value[id])
}

const openComments = async (i, id) => {
   if(openObj.value[id] === undefined) {
    openObj.value[id] = true 
    openObj.value['id-'+ i] = id
    const getComments = await store.getCommentsForPost(id);
    allComments.value[id] = getComments;
    console.log('ran')
   } else if (openObj.value[id] === true) {
    openObj.value[id] = false
   } else {
    openObj.value[id] = true
   }
}

const getVal = (arg) => {
    showMoreCommentLabel.value = arg
}
</script>

