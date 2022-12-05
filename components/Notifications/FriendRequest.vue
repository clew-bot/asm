<template>
    <v-card
      class="mx-auto"

    >
      <v-list
        v-for="notification in modelValue"
        :key="notification"
        lines="three"
        :item="modelValue"
      >
      <v-card-title>
          <div class="flex justify-items-start pt-3">

            <StatusUserAvatar class="pb-10" :props="notification.from.profilePicture"/>
            <div class="absolute left-16 top-6 ml-2 w-fit">
              <NuxtLink :to="`/profile/${notification.from.handleName}`">
                <div
                  class="text-lg font-semibold text-white hover:text-blue-300 cursor-pointer"
                >
                  {{notification.title}}
                  <div>
                    {{ notification.from.username }}
                  </div>
     
                </div>
              </NuxtLink>
              <div class="text-xs text-gray-400 cursor-pointer">
                <!-- @{{ notification.from.handleName }} -->
              </div>
            </div>

            <div
              class="text-slate-300 absolute top-5 right-6 text-xs cursor-default"
            >
              {{ regularDate(notification.createdAt) }}
            </div>
            <div
              class="text-slate-500 absolute top-9 right-6 text-xs cursor-default"
            >
              {{ createdAtLog(notification.createdAt) }}
            </div>
          </div>
        </v-card-title>
      </v-list>
    </v-card>
  </template>
<script setup>
const { modelValue } = defineProps(['modelValue'])
console.log(modelValue)

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