<style scoped>

</style>
<template>
    <div>
        <v-card v-for="theUsers in props.getMyConversations.conversations" :key="theUsers">
           
            <div class="border-2 p-3">
                <v-avatar>
                <img :src="theUsers.users[0].profilePicture" alt="avatar">
            </v-avatar>
              <span class="font-bold">{{theUsers.from.username}}:</span> {{theUsers.latestMessage}}
            </div>
        </v-card>
    </div>
</template>

<script setup>

const {props} = defineProps(['props'])
console.log(props.getMyConversations.conversations)

</script>

