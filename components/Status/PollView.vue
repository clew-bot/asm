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
                    v-for="option in poll.options"
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
              <v-btn :disabled="poll.votedBy.includes(userId)" class="m-2 normal-case grow " elevation="0" @click="handleVote(poll)">Vote</v-btn>
              
              <v-btn color="#f9fafb" prepend-icon="mdi-poll" class="m-2 normal-case grow font-bold text-slate-600"
              elevation="0" @click="toggleResults">
                
                Results</v-btn>
              </div>
            </v-card>
          </div>
</template>

<script setup>
import { usePollStore } from '~~/store/pollStore';
import { useUserStore } from '~~/store/userStore';
const userStore = useUserStore();
const store = usePollStore();
const { poll } = defineProps(['poll'])
const selectedOption = ref(null)
const openResults = ref(false);
const userId = ref(userStore.$state.userId);
console.log("userId", userId.value)
console.log(poll)
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

const handleVote = async (option) => {

  console.log("selectedOption", selectedOption.value)
  console.log(option._id);
  selectedOption.value.pollId = option._id
  await store.castVote(selectedOption.value)
}

// console.log("props", poll)

</script>

