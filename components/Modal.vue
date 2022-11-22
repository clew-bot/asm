<style scoped>
@import url("@/assets/css/vuetifyOverrides.css");
</style>
<template>
      <span
        class="text-base font-bold text-yellow-400 cursor-pointer underline "
        @click="dialog = true"
      >
        sign up!
    </span>
  <ClientOnly>
    <div class="signup-dialog">
      <v-dialog
        v-model="dialog"
        theme="dark"
      >
      <div class="w/full flex justify-center items-center">
        <div class="signup flex justify-center items-center">
      <v-card class="bg-stone-900 px-10 pt-2 pb-7 rounded-2xl drop-shadow-2xl">
        <div class="flex items-stretch">
        <p class="p-3 pb-0 font-extrabold text-slate-100 text-3xl">Create Account</p>
        <SmallIcon class="mb-2 ml-3"/>
    </div>
      <v-form 
            v-model="valid" 
            class="max-w-[40rem] min-w-[25rem] pt-5"
            @submit.prevent="handleCreateAccount"
            id="signup-form"
            >
        <label class="font-semibold text-slate-300 italic p-3 mt-10">Choose a username</label>
        <v-text-field
          autocomplete="off"
          name="username"
          class="p-3 pb-1 pt-0"
          v-model="username"
          :rules="nameRules"
          :counter="10"
          label="Username"
          required
        ></v-text-field>
        <label class="font-semibold text-slate-300 italic p-3 mt-10">Choose a password</label>
        <v-text-field
        autocomplete="off"
          name="password"
          class="px-3 py-1 pt-0"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :counter="10"
          label="Password"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          required
        ></v-text-field>
        <label class="font-semibold text-slate-300 italic p-3 mt-10">Verify password</label>
        <v-text-field
        autocomplete="off"
          name="securePassword"
          class="px-3 py-1 pt-0"
          v-model="securePassword"
          :rules="samePassword"
          :counter="10"
          label="Confirm password"
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
          required
        ></v-text-field>
        <label class="font-semibold text-slate-300 italic p-3 mt-10">Enter an email</label>
        <v-text-field
          autocomplete="off"
          name="email"
          class="px-3 py-1 pt-0"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <div class="p-2 pb-4 signup-btn">
          <v-btn
            :loading="loading[1]"
            :disabled="!valid"
            variant="elevated"
            form="signup-form"
            type="submit"
            prepend-icon="mdi-account-plus"
            >Sign Up
          </v-btn>
        </div>
      </v-form>
      <v-card-actions>
            <v-btn 
            variant="outlined" 
            block 
            @click="dialog = false"
            >
            Close
        </v-btn>
          </v-card-actions>
    </v-card>
    </div>
    </div>
      </v-dialog>
    </div>
    </ClientOnly>
  </template>
  <script setup>
    import { ref } from "vue";
    import SmallIcon from "@/components/SmallIcon.vue";
    import { useUserStore } from "@/store/userStore";

    const store = useUserStore();

    const dialog = ref(false);
    const show1 = ref(false);
    const valid = ref(false);
    const username = ref("");
    const password = ref("");
    const securePassword = ref("");
    const email = ref("");
    const nameRules = ref([
      (v) => !!v || "Username is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ]);
    const emailRules = ref([
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]);
    const passwordRules = ref([
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 8) ||
        "Must be equal or greater than 8 characters",
    ]);
    const samePassword = ref([
      (v) => !!v || "Passwords must match",
      (v) => v === password.value || "Passwords must match",
    ]);
    const loading = ref([false, false]);
    const load = (i) => {
      loading[i] = true;
      setTimeout(() => {
        loading[i] = false;
      }, 2000);
    };

    const checkValues = () => {
        console.log(emailRules.value)
    }
    const handleCreateAccount = async (e) => {
        const { username, password, securePassword, email } = Object.fromEntries(new FormData(e.target))
        console.log(username, password, securePassword, email)
        const data = {
            username,
            password,
            email
        }
        console.log(data)
        const clientSignUpToken = await store.signUp(data)
        console.log(clientSignUpToken)
        
    }

</script>