<style lang="scss" scoped>

</style>
<template>
    <div>
    <div class="relative">
        <div class="">
        <v-avatar
        class="h-[130px] w-[130px] border-2 absolute
        left-3 -top-12 rounded-full z-9"
            color="primary"
            size="128"
            >
            <img 
            class="h-[130px] w-[130px] border-2 absolute"
        :src="props.profilePicture" alt=""></v-avatar>

        </div>
        <div v-if="props._id === userId" class="absolute top-5 right-6">
            <ClientOnly>
            <EditProfileModal/>
            </ClientOnly>
        </div>
        <div v-else>
       
            <div class="absolute top-5 right-5">
                <ProfileAddFriendButton :props="props._id"/>
            </div>
            <div class="absolute top-16 right-5">
                <ProfileMessageButton :props="props._id"/>
            </div>
        </div>
    </div>
    <div class="pt-24 -mb-6 pb-5 bg-zinc-700">
        <div class="px-5">
            <div class="font-bold text-2xl text-amber-200">
                {{props.username}} 
            </div>
            <div>
                @{{props.handleName}} • <span class="italic font-semibold">Online</span>
            </div>
            <div class="flex text-sm font-semibold pt-4">
                <IconComponent class="pr-2" :props="{name: 'mdi-calendar-text', size: 'x-small'}"/><span>Joined <span class="font-base text-yellow-400">{{regularDate(props.createdAt)}}</span></span>
            </div>
            <div class="flex text-sm font-semibold pt-1">
                <IconComponent class="pr-2" :props="{name: 'mdi-map-marker', size: 'x-small'}"/><span>{{props.location}}</span>
            </div>
            <div class="flex text-sm font-semibold pt-1">
                <IconComponent class="pr-2" :props="{name: 'mdi-cake-variant', size: 'x-small'}"/><span>{{memberSinceLog(props.createdAt)}}</span>
            </div>
            <div class="pt-5 italic">{{props.bio || 'If it ain\'t broke don\'t fix it'}}</div>
        </div>
    </div>
</div>
</template>

<script setup>
import { regularDate } from '@/utils/timeConvert'
import { useUserStore } from '~~/store/userStore';
const userStore = useUserStore();
const { props } = defineProps(['props'])
const userId = ref(userStore.$state.userId);
</script>

