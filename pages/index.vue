<style scoped>
.hi >>> .v-input__details {
  display: none;
}

.button >>> .v-btn {
  width: 100% !important;
  background: rgb(48, 50, 117) !important;
  text-transform: none !important;
  max-width: 20rem; /* 320px */
}
.hi >>> .v-field--variant-filled .v-field__outline::before,
.v-field--variant-underlined .v-field__outline::before {
  display: none;
}

.hi >>> .v-field__outline::after {
  border: none !important;
}

.hi >>> .v-field--variant-filled {
  border: solid 1px grey !important;
  border-radius: 10px !important;
  width: 75% !important;
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
      <v-form v-model="valid">
        <v-text-field
          class="rounded-2xl p-2"
          v-model="firstName"
          :rules="nameRules"
          :counter="10"
          label="First name"
          required
        ></v-text-field>
        <v-text-field
          class="rounded-2xl p-2"
          v-model="lastName"
          :rules="nameRules"
          :counter="10"
          label="Last name"
          required
        ></v-text-field>
        <v-text-field
          class="rounded-2xl p-2"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <div class="p-2 button">
          <v-btn
            :loading="loading[1]"
            :disabled="loading[1]"
            color="primary"
            @click="load(1)"
          >
            Log In
          </v-btn>
        </div>
      </v-form>
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
const load = (i) => {
  loading.value[i] = true;
  setTimeout(() => {
    loading.value[i] = false;
  }, 2000);
};
</script>
