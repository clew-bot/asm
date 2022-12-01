<style scoped>
.list-enter-active {
    animation: slideFromUp 5s;
}
.list-leave-active {
  transition: all 1s ease;
 
}
.list-enter-from,
.list-leave-to {
  transform: translateY(-40px);
}


.v-enter-active {
    animation: slideFromUp 1s;
}

.v-leave-to {
    display: none;
    /* animation: slideFromDown .38s; */
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

.first:first-child {
    padding-top: 1.3rem !important
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
        class=" mb-10 bg-zinc-500 rounded w-full">
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
        <div class="p-4 flex flex-col gap-5">
            <v-card-text
            class="text-base text-white p-0 font-semibold" 
            v-html="status.content">

                 
            </v-card-text>
                <div class="flex justify-between">
                    <div class="flex">
                        <IconComponent :props="{ name: 'mdi-heart', color: 'white', size: 'default' }"/>
                        <IconComponent @click="openComments(i, status._id)" class="ml-3" :props="{ name: 'mdi-message', color: 'white', size: 'default' }"/>
                    </div>
                    <div class="flex">
                        <IconComponent class="mr-2" :props="{ name: 'mdi-bookmark', color: 'white' }"/>
                        <IconComponent class="mr-2" :props="{ name: 'mdi-dots-horizontal', color: 'white' }"/>
                    </div> 
                    </div>
                <div class="flex">
                    <span class="font-bold">{{status.likeCount}}&nbsp;</span>
                     Likes •&nbsp; 
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
                    <StatusCommentPost
                    :key="refreshMe" 
                    v-model="commentObj[i]"
                    v-on:need-more-comments="getVal" 
                    :props="{id: status._id}"
                    />
                </div>               

        </v-card>
    </div>
</TransitionGroup>
<button @click="checkVal">check</button>
</template>

<script setup>
import {createdAtLog, regularDate}  from "@/utils/timeConvert";
const props = defineProps(['modelValue'])
let openObj = ref({});
let countObj = ref({});
const showMoreCommentLabel = ref(false)
let passLoadMoreComments = ref(false)
const refreshMe = ref(0)
const commentObj = ref({})

onMounted(() => {
    props.modelValue.forEach((status) => {
        countObj.value[status._id] = status.comments.length
    })
})
const checkCommented = (id, index) => {
    if (!countObj.value[id]) {
        countObj.value[id] = 1
    } else {
        countObj.value[id] += 1
    }
    if(id) {
        refreshMe.value = refreshMe.value + 1
    }
}

const checkVal = () => {
    console.log('fdsfds', commentObj.value)
}

const openComments = (i, id) => {
    console.log(id)

   if(openObj.value[id] === undefined) {
    // console.log(id)
    openObj.value[id] = true 
    openObj.value['id-'+ i] = id
   } else if (openObj.value[id] === true) {
    openObj.value[id] = false
   } else {
    openObj.value[id] = true
   }
}


const getVal = (arg) => {
    console.log('nice', arg)
    showMoreCommentLabel.value = arg
}

const loadMoreComments = (arg) => {
    passLoadMoreComments.value = arg
}

</script>

