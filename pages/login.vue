<style scoped>


* {
  font-family: 'Quicksand', sans-serif !important;
}
.hi >>> .v-input__details {
  display: none;
}

.button >>> .v-btn {
  width: 100% !important;
  background: rgba(20, 14, 27, 0.869) !important;
  border-radius: 5px;
  text-transform: none !important;
  max-width: 20rem; /* 320px */
  transition: all 0.3s ease-in-out !important;
}
.hi >>> .v-field--variant-filled .v-field__outline::before,
.v-field--variant-underlined .v-field__outline::before {
  display: none;
}

.hi >>> .v-field__outline::after {
  border: none !important;
}
.hi >>> .v-field {
  border-radius: 0px !important;
}
.hi >>> .v-field--variant-filled {
  /* border: solid 1px rgba(211, 233, 10, 0.767) !important; */
  border: solid 1px linear-gradient(90deg, rgba(211, 233, 10, 0.767) 0%, rgba(39, 189, 94, 0.767) 100%) !important;

  border-radius: 10px !important;
  box-shadow: none !important;
  width: 75% !important;
  /* background: rgba(28, 27, 30, 0.976) */
  background: rgb(11, 12, 5);
}

.hi >>> .v-input__control {
  width: 100% !important;
  max-width: 20rem; /* 320px */
}

.hello {
  margin-top: 100px;
}
</style>

<template>
  <div class="hello w-full flex flex-col sm:flex-row">
    <div class="sm:w-1/2 flex justify-center items-center">
      <div><img :src="profileWoman" alt="" /></div>
    </div>
    <div class="hi sm:w-1/2 p-5">
      <v-card class="max-w-xs m-10 bg-zinc-800">
      <v-form v-model="valid">
        <v-text-field
          class="p-3 pb-1 w-full"
          v-model="firstName"
          :rules="nameRules"
          :counter="10"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
          class="px-3 py-1"
          v-model="password"
          :rules="passwordRules"
          :counter="10"
          label="Password"
          type="password"
          append-inner-icon="mdi-lock"
          required
        ></v-text-field>
        <v-text-field
          class="px-3 py-1"
          v-model="email"
          :rules="emailRules"
          label="E-mail (optional)"
          required
        ></v-text-field>
        <div class="p-2 pb-4 button">
          <v-btn
            :loading="loading[1]"
            :disabled="loading[1]"
            color="primary"
            @click="load(1)"
            >Log In
          </v-btn>
        </div>
      </v-form>
    </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import profileWoman from "~~/assets/svg/profile-woman.svg";
const nameRules = ref([
  (v) => !!v || "Name is required",
  (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
]);
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const emailRules = ref([
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);
const password = ref("");
const passwordRules = ref([
  (v) => !!v || "Password is required",
  (v) =>
    (v && v.length >= 8) ||
    "Password must be equal or greater than 8 characters",
]);
const valid = ref(false);
const loading = ref([]);


const load = async (i) => {
  loading.value[i] = true;
console.log('hi')
  const response = await $fetch("/api/user/user", {
    method: "POST",
    body: { name: firstName.value, email: email.value, password: password.value },
    });

    console.log(response)

  setTimeout(() => {
    loading.value[i] = false;
  }, 2000);


};
</script>
