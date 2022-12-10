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
               <v-card class="p-0 overflow-hidden border-2 rounded m-3">
        <v-card-title>Suggested People</v-card-title>
        <v-card-text>You may know</v-card-text>
        <div class="border-b-[.2px] p-4">
            <StatusUserAvatar :size="70"/>
        </div>
        <div class="border-b-[.2px] p-4">
            <StatusUserAvatar :size="70"/>

        </div>
        <div class="border-b-[.2px] p-4">
            <StatusUserAvatar :size="70"/>

        </div>
               </v-card>
           </div>
       </div>
</template>

<script setup>

</script>

