<template>
  <div class="flex justify-center">
    <div class="w-full max-w-[1300px] flex m-auto">
     <Navigation/>
        <div class="w-full ml-auto">
            <div class="sticky top-0 h-[4rem] border-b-[.2px] border-slate-700 z-10">
                <div class=" p-5 w-fit text-2xl font-bold uppercase text-slate-300 ">
                    <slot name="header"></slot>
                </div>
            </div>
            <div class="h-fit border-b-[.2px] border-slate-700 z-10 bg-[#121212]">
                <div class="text-2xl font-bold uppercase text-slate-300 ">
                    <slot name="postStatus"></slot>
                </div>
                    <slot name="postMedia"></slot>
            </div>
            
            <div class="border-1 p-5">
                <slot/>
            </div>
        </div>
        <slot name="rightSide"></slot>
       <!-- <RightBarSuggested/> -->
    </div>
    </div>
</template>

<script setup>
import RightBarHome from '@/components/RightBarHome.vue'
import RightBarSuggested from '@/components/RightBarSuggested.vue'
import Navigation from '@/components/Navigation.vue'



</script>

<style lang="scss" scoped>

</style>