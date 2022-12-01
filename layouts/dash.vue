<template>
  <div class="flex justify-center">
    <div class="w-full max-w-[1300px] flex m-auto">
     <LayoutNavigation/>
        <div class="w-full ml-auto">
            <div class="sticky top-0 h-[4rem] border-b-[.2px] border-b-[var(--dashBorder)] z-10 bg-[var(--background)]">
                <div class=" p-5 w-fit text-2xl font-bold uppercase text-slate-300">
                    <slot name="header"></slot>
                </div>
            </div>
            <div class="transition-all h-fit  z-10">
                <div class="text-2xl font-bold uppercase text-slate-300 ">
                    <slot name="postStatus"></slot>
                </div>
                    <slot name="postMedia"></slot>
            </div>
            
            <div>
                <slot/>
            </div>
        </div>
        <slot name="rightSide"></slot>
       <!-- <RightBarSuggested/> -->
    </div>
    </div>
</template>

<script setup>
// import RightBarHome from '@/components/RightBarHome.vue'
// import RightBarSuggested from '@/components/RightBarSuggested.vue'
// import Navigation from '@/components/Navigation.vue'



</script>

<style lang="scss" scoped>

</style>