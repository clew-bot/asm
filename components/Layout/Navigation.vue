<template>
       <div class="hidden relative w-28 xl:w-1/3 sm:block border-r-[.2px] border-slate-700">
            <div class="sticky top-0 pt-8 overflow-auto">
                <ul class="text-lg lg:text-lg font-semibold flex flex-col justify-center items-start">
                    <li>  
                        <v-avatar 
                        class="ml-4"
                        color="blue">
                            <v-icon dark>
                                mdi-account-circle
                            </v-icon>
                            </v-avatar>
                    </li>
                    <NuxtLink to="/dashboard">
                        <li class="p-4 flex justify-center items-center">
                            <img :src="home" alt="" class="pl-1 icon-hover">
                            <p class="ml-5 hidden xl:block">Home</p></li>
                    </NuxtLink>
                    <NuxtLink to="/notifications">
                        <li class="p-4 flex justify-center items-center  cursor-pointer">
                            <img :src="bell" alt="" class="pl-1 icon-hover">
                            <p class="ml-5 hidden xl:block">Notifications</p></li>
                    </NuxtLink>
                    <NuxtLink to="/messages">
                        <li class="p-4 flex justify-center items-center">
                            <img :src="message" alt="" class="pl-1 icon-hover">
                            <p class="ml-5 hidden xl:block">Messages</p></li>
                    </NuxtLink>
                    <NuxtLink to="/bookmarks">
                    <li class="p-4 flex justify-center items-center"> <img
                        :src="bookmark" alt="" class="pl-1 icon-hover">
                        <p class="ml-5 hidden xl:block">Bookmarks</p></li>
                    </NuxtLink>
                    <NuxtLink to="/profile">
                    <li class="p-4 flex justify-center items-center"> <img
                        :src="profile" alt="" class="pl-1 icon-hover">
                        <p class="ml-5 hidden xl:block">My Profile</p></li>
                    </NuxtLink>
                    <li class="p-4 flex justify-center items-center"> <img
                        :src="more" alt="" class="pl-1 icon-hover">
                        <p class="ml-5 hidden xl:block">More</p></li>
    
                    <li  @click="logout" class="p-4 flex justify-center items-center cursor-pointer
                    transition-all"> <img
                        :src="more" alt="" class="pl-1 icon-hover">
                        <p class= "transition-all
                        ml-5 hidden xl:block">Logout</p></li>
                </ul>
            </div>
        </div>
            <div
           class="bg-[var(--backgroundColor)] text-white text-center p-4 border-t-[.2px] border-t-[var(--dashBorder)] w-full fixed bottom-0 z-10 sm:hidden"
           >
        <div class="flex justify-evenly items-center">
            <NuxtLink to="/dashboard">
                <IconComponent :props="{ name: 'mdi-home-variant', size: 'large'}"/>
           </NuxtLink>
           <NuxtLink to="/notifications">
                <IconComponent :props="{ name: 'mdi-bell', size: 'large'}"/>
            </NuxtLink>
            <NuxtLink to="/dashboard">
           <IconComponent :props="{ name: 'mdi-plus-box-outline', size: 'large'}"/>
           </NuxtLink>
           <NuxtLink to="/messages">
           <IconComponent :props="{ name: 'mdi-message-bulleted', size: 'large'}"/>
           </NuxtLink>
           <NuxtLink to="/profile">
           <v-avatar 
            class=""
            color="blue">
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            </NuxtLink>
        </div>
      </div>
</template>

<script setup>
import heart from "@/assets//svg/heart.svg";
import home from "@/assets//svg/home.svg";
import message from "@/assets//svg/message.svg";
import bell from "@/assets//svg/bell.svg";
import bookmark from "@/assets//svg/bookmark.svg";
import profile from "@/assets//svg/profile.svg";
import more from "@/assets//svg/more.svg";
import plus from "@/assets//svg/plus.png";

import { useUserStore } from "@/store/userStore";

const store = useUserStore(); 

const logout = async () => {
    console.log('logout')
    const loggingOut = await store.logout();
    navigateTo('/login')
    }
</script>

<style lang="scss" scoped>

</style>