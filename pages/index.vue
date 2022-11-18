<style scoped>
.hi >>> .v-field__outline {
    border-bottom: none !important;
}

.hi >>> .v-input__details {
    border-bottom: none !important;
    border: solid 2px hotpink !important;
    display: none;
}

.hi >>> .v-field--variant-filled .v-field__outline::before, .v-field--variant-underlined .v-field__outline::before {
    display: none;
}

.hi >>> .v-field__outline::after {
    border: none !important;
}

.hi >>> .v-field--variant-filled {
    border: solid 1px grey !important;
    border-radius: 1rem !important;
}


</style>

<template>
  <div class="border-2 border-green-500">
    <div>App Name Here</div>
    <div class="hi border-2 w-1/2 p-5">
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
      </v-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
</script>