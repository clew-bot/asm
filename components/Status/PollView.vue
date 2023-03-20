<style scoped>
.newFont {
    font-family: 'Unbounded', cursive !important;
}

.ok >>> .v-label {
    opacity: 1 !important;
    font-size: .8rem !important;
    color: rgb(0, 0, 0);
    font-weight: 600;
}
</style>
<template>
             <div>
            <v-card class="mx-6 bg-zinc-500 border-t-4 border-t-slate-100">
              
              <v-radio-group>
                <p class="newFont text-xl font-bold p-2 text-black">{{ poll.title }}</p>
                <div class="ok">
                  <div v-if="!openResults">
                  <v-radio
                    v-for="option in poll.poll"
                    :key="option"
                    :label="option.value"
                    :value="option"
                    @click="changeOption(option)"
                    class="text-slate-50 z-10 text-xs opacity-100"
                  ></v-radio>
                </div>
                <div v-else>
                  SHOW RESULTS
                </div>
                </div>
              </v-radio-group>
        
              <div class="flex justify-center items-center">
              <v-btn class="m-2 normal-case grow " elevation="0" @click="handleVote(poll)">Vote</v-btn>
              
              <v-btn color="#f9fafb" prepend-icon="mdi-poll" class="m-2 normal-case grow font-bold text-slate-600"
              elevation="0" @click="toggleResults">
                
                Results</v-btn>
              </div>
            </v-card>
          </div>
</template>

<script setup>
import { usePollStore } from '~~/store/pollStore';
const store = usePollStore();
const { poll } = defineProps(['poll'])
const selectedOption = ref(null)
const openResults = ref(false);

console.log("The Poll: ", poll)

// When a user clicks on an option save the option 
// and the user id to the database

const toggleResults = () => {
  console.log("openResults")
  openResults.value = !openResults.value;
}

const changeOption = (option) => {
  selectedOption.value = option
  console.log("selectedOption", selectedOption.value)
}

const handleVote = (option) => {
  console.log(option);
  const castVote = 
  console.log("option", selectedOption.value)
  // Do something with value
}

// console.log("props", poll)

</script>

