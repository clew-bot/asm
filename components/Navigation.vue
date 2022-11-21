<template>
       <div class="relative w-28 xl:w-1/3 block border-r-[.2px] border-slate-700">
            <div class="sticky top-0 h-screen pt-8 overflow-auto">
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
                </ul>
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

</script>

<style lang="scss" scoped>

</style>