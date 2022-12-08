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
               <div class="p-5 overflow-hidden">
        <div> Title</div>
               </div>
           </div>
       </div>
</template>

<script setup>

</script>

