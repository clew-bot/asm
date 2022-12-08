<style scoped>
@import url("@/assets/css/animations.css");
</style>
<template>

    <v-card elevation="0">
      <TransitionGroup name="list">
      <v-list
        v-for="notification in modelValue"
        :key="notification"
        class="h-[8rem] bg-zinc-800 hove:bg-zinc-700 border-b-[var(--dashBorder)] border-[.2px] transition-all duration-150"
      >
        <v-card-title>
          <div class="flex justify-items-start">
            <NuxtLink :to="`/profile/${notification.from?.handleName}`">
              <StatusUserAvatar
                class="mt-1"
                :props="notification.from.profilePicture"
              />
            </NuxtLink>
            <div class="ml-3 w-full">
              <div class="text-base font-semibold text-white cursor-default]">
                {{ notification.title }}
              </div>
              <div
                class="text-sm text-amber-300 mb-1 cursor-default overflow-hidden w-[80%] sm:w-[85%] lg:w-[88%] whitespace-nowrap text-ellipsis inline-block"
              >
                {{ notification.content }}
              </div>
              <br />

              <div
                class="text-xs font-bold hover:text-blue-300 hover:underline z-10 w-fit cursor-pointer"
              >
                <NuxtLink :to="`/profile/${notification.from.handleName}`">
                  {{ notification.from.username }}
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
                class="text-slate-100 absolute bottom-2 right-16 text-xs cursor-pointer border-zinc-300 hover: border-2 rounded p-2 bg-zinc-700 hover:shadow-lg z-10 transition-all"
                @click="acceptFriendRequest(notification.from._id, notification._id)"
              >
                Accept
              </div>
              <div
                @click="
                  denyFriendRequest(notification.from._id, notification._id)
                "
                class="text-slate-100 absolute bottom-2 right-2 text-xs cursor-pointer border-2 border-zinc-300 rounded p-2 bg-zinc-900 hover:shadow-lg z-10 transition-all"
              >
                Nope
              </div>

              <!-- <IconComponent
              v-if="!clicked"
              @click="acceptFriendRequest(notification.from._id, notification._id)"
              :props="{name: 'mdi-check-bold', size: 'large', color: 'green'}" /> -->
            </div>
            <div
              class="text-slate-500 absolute top-0 right-1 text-xs cursor-default"
            >
              <IconComponent
                :props="{
                  name: 'mdi-close-thick',
                  size: 'small',
                  color: 'red',
                }"
              />
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
const { modelValue, props } = defineProps(["modelValue", "props"]);
const emit = defineEmits(["accepted"]);
const clicked = ref(false);

const notifStore = useNotifStore();

const acceptFriendRequest = async (fromId, notifId) => {
  clicked.value = true;
  const dto = {
    fromId,
    notifId,
  };
  const newNotifs = await notifStore.acceptFriendRequest(dto);

  emit("accepted", newNotifs);
};

const denyFriendRequest = async (fromId, notifId) => {
  clicked.value = true;
  const dto = {
    fromId,
    notifId,
  };
  const deleteNotif = await notifStore.declineFriendRequest(dto);
  emit("accepted", deleteNotif);
};

const deleteNotification = (id) => {
  notifStore.deleteNotification(id);
};
</script>
