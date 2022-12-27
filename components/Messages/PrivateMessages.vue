<template>
    <div>
        show arrow
    </div>
    <div>
        Now Chatting with
    </div>
    <v-card>
        <div v-for="message in props" :key="message">
          
            <div class="flex p-2 items-start gap-2">
                <v-avatar>
                    <img :src="message.owner.profilePicture" alt="avatar">
                </v-avatar>
                <div>
                    <!-- {{  message.handleName  }} -->
                    {{  message.content  }}
                </div>
           
            </div>
        </div>
    </v-card>
</template>

<script setup>
import { useUserStore } from '~~/store/userStore';
const userStore = useUserStore();
const {props} = defineProps(['props'])
console.log('props: ',props)
console.log('userStore: ',userStore.$state.userId);
</script>

<style lang="scss" scoped>

</style>