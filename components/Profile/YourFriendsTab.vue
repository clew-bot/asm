<style scoped>

</style>
<template>
    <div class="" v-for="friend in friends" :key="friend">
      <v-card class="border-2 m-2 flex items-start justify-start">
        <NuxtLink :to="'/profile/' + friend.handleName">
        <StatusUserAvatar :props="friend.profilePicture" />
        </NuxtLink>
        <div class="p-2">
            {{ friend.username }}
        </div>

      </v-card>

    </div>
</template>

<script setup>
const props = defineProps(['friends'])
const friends = ref(props.friends)

console.log("friends", friends.value)
</script>