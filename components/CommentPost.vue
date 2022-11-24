<style scoped>

</style>

<template>
    <div class="flex items-center border-t-[.2px] border-t-[var(--dashBorder)] pb-3 relative">
        <div class="flex items-startrelative pt-3 pl-2 whitespace-normal">
           <v-avatar
           class="mt-1"
        size="35">
            <v-img
                src="https://cdn.jim-nielsen.com/ios/512/super-mario-run-2017-11-07.png"
                alt="John"
                class="cursor-pointer"
            >
            </v-img>
        </v-avatar>
        <div class="ml-2 z-10 w-full">
            <div>
                <div class="text-xs font-bold text-stone-300  pr-8 pb-2 pt-1">
                <span class="cursor-pointer hover:underline">LebRon James</span>
                  <span class="font-normal text-yellow-100 hover:no-underline cursor-default">&nbsp;We're gonna win the game tonight! We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!We're gonna win the game tonight!</span>
                </div>
            </div>
    
        </div>
    </div>
  <IconComponent
    class="absolute right-4 top-3"
    :props="{name: 'mdi-heart-outline', size: 'x-small', color: '#a3a3a3'}"/>
</div>
</template>

<script setup>

</script>
