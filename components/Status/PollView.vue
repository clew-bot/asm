<style scoped>
.newFont {
    font-family: 'Unbounded', cursive !important;
}

.ok >>> .v-label {
    opacity: 1 !important;
}
</style>
<template>
             <div>
            <v-card class="mx-12 bg-zinc-500 border-t-4 border-t-yellow-300">
              <v-radio-group>
                <p class="newFont text-xl font-bold p-2 text-sky-100">{{ poll.title }}</p>
                <div class="ok">
                  <v-radio
                    v-for="option in poll.poll"
                    :key="option"
                    :label="option.value"
                    :value="option"
                    @click="changeOption(option)"
                    class="text-slate-50 z-10 font-base opacity-100 newFont"
                  ></v-radio>
            
                </div>
              </v-radio-group>
              <div class="flex justify-center items-center">
              <v-btn color="#9f1239" class="m-2 normal-case grow " elevation="0" @click="handleVote">Vote</v-btn>
              <v-btn color="#f9fafb" prepend-icon="mdi-poll" class="m-2 normal-case grow font-bold text-slate-600"
              elevation="0">
                
                Results</v-btn>
              </div>
            </v-card>
          </div>
</template>

<script setup>

const { poll } = defineProps(['poll'])
const selectedOption = ref(null)

// When a user clicks on an option save the option 
// and the user id to the database

const changeOption = (option) => {
  selectedOption.value = option
  console.log("selectedOption", selectedOption.value)
}

const handleVote = (option) => {
  console.log("option", selectedOption.value)
}

console.log("props", poll)

</script>

