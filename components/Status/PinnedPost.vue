<style scoped>
.spinner {
    animation: spin 10s linear infinite;


}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.newFont {
    font-family: 'Unbounded', cursive !important;
}
</style>
<template>
    <div class="absolute right-2 top-2 text-xs newFont z-10">
        {{ createdAtLog(pinnedPost.createdAt)}}
    </div>
    <div class="border-t-0 relative bg-zinc-600">
        <div class="flex">
        <div class="p-5 border-r-2">
        <v-avatar
            size="55"
            class="border-2"
        >
            <img :src="pinnedPost.author.profilePicture" alt="avatar" />
        </v-avatar>
    </div>
    <div>
        <v-card-title
        class="newFont"
        >
        <NuxtLink :to="`/profile/${pinnedPost.author.handleName}`">
            {{ pinnedPost.author.username }}
            </NuxtLink>
        </v-card-title>
        <v-card-text>
            {{ pinnedPost.content }}
        </v-card-text>
    </div>
    </div>
        <div>
            <IconComponent
                class="spinner absolute right-7 top-12 z-10"
                :props="{ name: 'mdi-pinwheel', size: '20', color: 'green'}"/>
        </div>
        <div class="bg-brown h-6 absolute w-1 bottom-0 right-11"></div>
    </div>




    
</template>

<script setup>
const { pinnedPost } = defineProps(['pinnedPost']);



</script>

