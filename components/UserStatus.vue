<template>
    <div>
        <v-card 
        elevation="4"
        color="#18181b"
        class=" mb-5">
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
                        <v-img
                            src="https://i.ibb.co/RTqVRyz/php-Yam-YTu-c2-PM.jpg"
                            alt="John"
                            class="cursor-pointer"
                        >
                        </v-img>
                    </v-avatar>
                </v-badge>
                    <div class="absolute left-16 top-4 ml-2 w-fit">
                        <div class="text-base font-semibold text-gray-300 cursor-pointer">
                            des-tony
                        </div>
                        <div class="text-xs text-gray-400 cursor-pointer">
                            @destiiinywatsoon
                        </div>
                    </div>
                    <v-icon class="absolute right-16 top-6" size="xx-small">mdi-timer-sand</v-icon>
                    <div class="text-slate-300 absolute top-5 right-6 text-xs cursor-default">
                        Nov 12</div>
                    <div class="text-slate-500 absolute top-9 right-6 text-xs cursor-default">
                 
                        8:32PM</div>
                </div>

            </v-card-title>
            <v-card-text class="text-base text-gray-200 pt-2">
                    I love the seasons it's a great day to be alive I love my boyfriend so much he's the best person in the whole world I think I'm gonna marry him 😍
                 
            </v-card-text>
            <div class="p-3">
                <div class="flex justify-between">
                    <div class="flex">
                        <IconComponent :props="{ name: 'mdi-heart', color: '#6b7280' }"/>
                        <IconComponent class="ml-2" :props="{ name: 'mdi-message', color: '#6b7280' }"/>
                    </div>
                    <div class="flex">
                        <IconComponent class="mr-2" :props="{ name: 'mdi-bookmark', color: '#6b7280' }"/>
                        <IconComponent class="mr-2" :props="{ name: 'mdi-dots-horizontal', color: '#6b7280' }"/>
                    </div> 
                    </div>
                </div>
                <div class="p-3">
                <div class="flex pb-2">
                    <span class="font-bold">139&nbsp;</span>
                     Likes •&nbsp; 
                    <span class="font-bold">3&nbsp;</span>
                    Comments   
                </div>
          
                </div>
                <CommentPost/>
        </v-card>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>