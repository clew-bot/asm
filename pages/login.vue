<style scoped>
@import url("@/assets/css/vuetifyOverrides.css");
</style>

<template>
  <div class="pt-28 w-full flex flex-col md:flex-row">
    <div class="md:w-1/2 flex sm:justify-center items-center sm:ml-0">
      <div class="text-center">
        <p class="text-5xl p-2 text-yellow-400">Welcome to Artine</p>
        <p class="text-2xl p-2 text-yellow-200">Connect with others from the around the world in minutes.</p>
      </div>
    </div>
    <div class="log p-5 text-center md:w-1/2">
      <div class="flex justify-center flex-col items-center">
      <v-card class="bg-zinc-800 min-w-[80%] rounded-2xl drop-shadow-2xl">
      <v-form v-model="valid"
      @submit.prevent="handleLogin">
        <v-text-field
          autocomplete="off"
          aria-autocomplete="list"
          class="p-3 pb-1"
          v-model="username"
          :rules="nameRules"
          :counter="10"
          label="Username or Email"
          required
        ></v-text-field>
        <v-text-field
          autocomplete="off"
          aria-autocomplete="list"
          class="px-3 py-1"
          v-model="password"
          :rules="passwordRules"
          :counter="10"
          label="Password"
          type="password"
          append-inner-icon="mdi-lock"
          required
        ></v-text-field>
        <div class="p-2 px-3 pb-4 button">
          <v-btn
            :loading="loading[1]"
            :disabled="!valid"
            color="primary"
            @click="load(1)"
            append-icon="mdi-login"
            form="login-form"
            type="submit"
            >Log In
          </v-btn>
        </div>
      </v-form>
    </v-card>
    <div class="pt-2">
      <span>Don't have an account? Let's  </span>
        <Modal/>
          
    </div>
  </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
const username = ref("");
const password = ref("");
const email = ref("");

const nameRules = ref([
  (v) => !!v
]);

const passwordRules = ref([
  (v) => !!v || "Password is required",
  (v) =>
    (v && v.length >= 8) ||
    "Password must be equal or greater than 8 characters",
]);
const valid = ref(false);
const loading = ref([]);

const handleLogin = (e) => {
  const { username, password, email } = Object.fromEntries(new FormData(e.target));
}


// const load = async (i) => {
// loading.value[i] = true;
//   const response = await $fetch("/api/user/user", {
//     method: "POST",
//     body: { name: firstName.value, email: email.value, password: password.value },
//     });

//     console.log(response)

//   setTimeout(() => {
//     loading.value[i] = false;
//   }, 2000);


// };
</script>
