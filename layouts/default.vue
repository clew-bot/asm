<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<template>
    <header>
      <nav class="border-b-2 border-gray-800 bg-gray-800 shadow-lg">
        <ul class="flex p-6 flex-row justify-between">
          <Test/>
          <div class="flex">
          <li class="p-2"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="p-2"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="p-2"><nuxt-link to="/login">Login</nuxt-link></li>
        </div>
        </ul>
      </nav>
    </header>
   
    <div class="container m-auto pb-12">
      <slot />
    </div>
    <footer>
      <Transition>
      <div v-if="!closeFooter"
           class="bg-gray-800 text-white text-center p-4 w-full fixed bottom-0"
           >
        <p>Made with ❤️ by<span><a class="p-2 rounded text-yellow-500 font-semibold underline" href="https://github.com/clew-bot" target="_blank">Chad Lew</a></span></p>
        <v-icon class="absolute right-4 bottom-4 cursor-pointer"
                @click="closeFooter = true">mdi-close</v-icon>
      </div>
    </Transition>
    </footer>
</template>
<script setup>
import Test from "@/components/Test.vue";
const closeFooter = ref(false);
</script>
