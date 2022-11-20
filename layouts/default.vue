<style>
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
   
    <div class="container m-auto">
      <slot />
    </div>
    <footer>
      <div class="bg-gray-800 text-white text-center p-4 fixed w-full bottom-0">
        <p>Made with ❤️ by<span><a class="p-2 rounded hover:bg-green-900 bg-green-700 shadow-md translate-y-10 transition-all" href="https://github.com/clew-bot" target="_blank">Chad Lew</a></span></p>
        
      </div>
    </footer>
</template>
<script setup>
import Test from "@/components/Test.vue";
</script>
