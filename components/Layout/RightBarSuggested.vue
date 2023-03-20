<style scoped>
.no-scroll::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
.no-scroll {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
</style>
<template>
    <div class="relative hidden md:block  w-1/2 xl:w-2/3 border-1 z-10
       border-l-[.2px] border-l-[var(--dashBorder)]">
           <div class="sticky top-0 h-screen overflow-auto no-scroll">
               <v-card class="p-1 overflow-hidden border-2 rounded m-3">
        <v-card-title>Suggested People</v-card-title>
        <v-card-text>You may know</v-card-text>
        <!-- Loop over the Suggestions -->
        <div
         v-for="user in theSuggestions" :key="user._id"
         class="flex p-1"
        >
        <StatusUserAvatar :props="user.profilePicture" :size="70"/>
        <div class="semi-bold">{{ user.username }}</div>
    </div>
               </v-card>
           </div>
       </div>
</template>

<script setup>
import { useUserStore } from "~~/store/userStore";
const store = useUserStore();

const theSuggestions = ref();

const theSuggestedPeople = await store.getSuggestedPeople();
console.log("theSuggestedPeople: ", theSuggestedPeople);
theSuggestions.value = theSuggestedPeople;


// Make request to get suggested people from the server

</script>

