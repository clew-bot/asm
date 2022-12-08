<style scoped>
@import url('@/assets/css/animations.css');
</style>
<template>
    <v-card
      elevation="0"
    >
    <TransitionGroup name="list">
      <v-list
        v-for="notification in modelValue"
        :key="notification"
        class="h-[8rem] bg-zinc-800 hover:bg-zinc-700 border-b-[var(--dashBorder)] border-[.2px] transition-all duration-150"
      >
      <v-card-title>
          <div class="flex justify-items-start">
            <NuxtLink
                  :to="`/profile/${notification.from?.handleName}`">
            <StatusUserAvatar
            class="mt-1"
            :props="notification.from.profilePicture"/>
            </NuxtLink>
            <div 
            class="ml-3 w-full">
                <div
                  class="text-base font-semibold text-white cursor-default] "
                >
                  {{notification.title}}
                </div>
                <div class="text-sm text-amber-300
                mb-1 cursor-default overflow-hidden w-[80%] sm:w-[85%] 
                lg:w-[88%] whitespace-nowrap text-ellipsis inline-block">
                  {{notification.content}} 
                  </div>
                  <br>
            
                  <div class="text-xs font-bold hover:text-blue-300 hover:underline z-10 w-fit cursor-pointer">
                    <NuxtLink
                  :to="`/profile/${notification.from.handleName}`">
                    {{notification.from.username}}
                  </NuxtLink>
                  </div>
             
              <div class="text-xs text-gray-400 cursor-default">
                @{{ notification?.from?.handleName }}
              </div>
            </div>

            <div
              class="text-slate-300 absolute top-4 right-6 text-xs cursor-default"
            >
              <!-- {{ regularDate(notification.createdAt) }} -->
            </div>
            <div
              class="text-slate-200 absolute top-4 right-6 text-xs cursor-default"
            >
              {{ simplifiedTime(notification.createdAt) }}
            </div>
            <div
              class="text-slate-300 absolute bottom-4 right-6 text-xs cursor-default"
            >
              <!-- <IconComponent :props="{ name: 'mdi-chevron-down', size: 'xx-large'}" /> -->
            </div>
            <div v-if="notification.type === 'friendRequestReceived'">
            <div
              class="text-slate-500 absolute bottom-2 right-10 text-xs cursor-default"
            >
              <IconComponent
              v-if="!clicked"
              @click="acceptFriendRequest(notification.from._id, notification._id)"
              :props="{name: 'mdi-check-bold', size: 'large', color: 'green'}" />
            </div>
            <div
              class="text-slate-500 absolute bottom-2 right-4 text-xs cursor-default"
            >
              <IconComponent :props="{name: 'mdi-close-thick', size: 'large', color: 'red'}" />
            </div>
          </div>
          <!-- <div>
            <div
              class="text-slate-500 absolute bottom-2 right-4 text-xs cursor-default"
            >
              <IconComponent
              @click="deleteNotification(notification._id)"
              :props="{name: 'mdi-check-bold', size: 'large', color: 'green'}" />
            </div>
          </div> -->
          </div>
        </v-card-title>
      </v-list>
      </TransitionGroup>
    </v-card>
  </template>
<script setup>
import { useNotifStore } from "~~/store/NotifStore";
const { modelValue, props } = defineProps(['modelValue', 'props'])
const emit = defineEmits(['accepted'])
const clicked = ref(false)
console.log('111', props)
console.log('222', modelValue)

const notifStore = useNotifStore();




const acceptFriendRequest = async (fromId, notifId) => {
  clicked.value = true
  console.log('accept friend request', fromId, notifId);
  const dto = {
      fromId,
    //  notifId
  }
  console.log(dto)
  const newNotifs = await notifStore.acceptFriendRequest(dto)
  console.log('newNotifs', newNotifs)
  emit('accepted', newNotifs)
}

const deleteNotification = (id) => {
  console.log('delete notification', id);
  notifStore.deleteNotification(id)
}
</script>