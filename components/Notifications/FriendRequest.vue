<template>
    <v-card
      class="mx-auto bg-inherit"
      elevation="0"
    >
      <v-list
        v-for="notification in modelValue"
        :key="notification"
        class="h-[7rem] border-4 border-slate-600 rounded-2xl bg-slate-700
        transition-all"
        
      >
      <v-card-title>
          <div class="flex justify-items-start">
            <NuxtLink
                  clas="w-fit"
                  :to="`/profile/${notification.from.handleName}`">
            <StatusUserAvatar class="pb-10" :props="notification.from.profilePicture"/>
            </NuxtLink>
            <div class="absolute left-16 top-3 ml-2 w-fit">
          
                <div
                  class="text-base font-semibold text-white cursor-default"
                >
                  {{notification.title}}
                </div>
                <div class="text-sm text-amber-300 cursor-default">
                  {{notification.content}}!
                  </div>
                  <NuxtLink
                  :to="`/profile/${notification.from.handleName}`">
                  <div class="text-xs font-bold hover:text-blue-300 hover:underline">
                    {{notification.from.username}}
                  </div>
                </NuxtLink>
              <div class="text-xs text-gray-400 cursor-pointer">
                @{{ notification.from.handleName }}
              </div>
            </div>

            <div
              class="text-slate-300 absolute top-4 right-6 text-xs cursor-default"
            >
              {{ regularDate(notification.createdAt) }}
            </div>
            <div
              class="text-slate-500 absolute top-8 right-6 text-xs cursor-default"
            >
              {{ createdAtLog(notification.createdAt) }}
            </div>
            <div v-if="!notification.read">
            <div
              class="text-slate-500 absolute bottom-2 right-10 text-xs cursor-default"
            >
              <IconComponent
              @click="acceptFriendRequest(notification.from._id, notification._id)"
              :props="{name: 'mdi-check-bold', size: 'large', color: 'green'}" />
            </div>
            <div
              class="text-slate-500 absolute bottom-2 right-4 text-xs cursor-default"
            >
              <IconComponent :props="{name: 'mdi-close-thick', size: 'large', color: 'red'}" />
            </div>
          </div>
          </div>
        </v-card-title>
      </v-list>
    </v-card>
  </template>
<script setup>
const { modelValue } = defineProps(['modelValue'])
import { useNotifStore } from "~~/store/notifStore";

console.log('111', modelValue)
const notifStore = useNotifStore();

const acceptFriendRequest = (fromId, notifId) => {
  console.log('accept friend request', fromId, notifId);
  const dto = {
      fromId,
     notifId
  }
  console.log(dto)
  notifStore.acceptFriendRequest(dto)
}

// const items = [
//     {

//       subtitle: 'You have <strong>2</strong> new messages',
//     },
//     { type: 'divider', inset: false },
//     {
//       title: 'Starred',
//       subtitle: 'You have <strong>1</strong> starred message',
//     },
//     {
//       title: 'Sent Mail',
//       subtitle: 'You have <strong>0</strong> sent messages',
//     },
//     {
//       title: 'Drafts',
//       subtitle: 'You have <strong>0</strong> draft messages',
//     },
//     {
//       title: 'Trash',
//       subtitle: 'You have <strong>0</strong> trashed messages',
//     },
//   ]
</script>

<style lang="scss" scoped>

</style>