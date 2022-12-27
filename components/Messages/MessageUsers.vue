<style scoped>

</style>
<template>
    <div>
        <v-card 
        @click="() => $router.push(`/messages/${theUsers.users[0].handleName}`)"
        class="border-t-[.2px] border-[var(--dashBorder)] rounded-none hover:bg-slate-600"
        v-for="theUsers in props.getMyConversations.conversations" :key="theUsers">
           <div class="absolute text-xs right-2 top-1">{{createdAtLog(theUsers.updatedAt)}}</div>

            <div class="p-3">
                <NuxtLink :to="`profile/${theUsers.users[0].handleName}`">
                <v-avatar   class="mr-2 border-2">
                <img :src="theUsers.users[0].profilePicture" alt="avatar"
              >
            </v-avatar>
            </NuxtLink>
              <span class="font-bold text-green-400">{{theUsers.from.username}}:</span> {{theUsers.latestMessage}}
            </div>
        </v-card>
    </div>
</template>

<script setup>

const {props} = defineProps(['props'])
console.log(props.getMyConversations.conversations)

</script>

