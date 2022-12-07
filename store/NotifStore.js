import { defineStore, storeToRefs } from "pinia";
import { useUserStore } from "./userStore";
const userStore = useUserStore();
// const userStore = useUserStore();

export const useNotifStore = defineStore("notif", {
  state: () => ({ notifications: [] }),
  getters: {
    // theData: (state) => state.name,
  },
  actions: {
    sendFriendRequest: async (payload) => {
      console.log('before',userStore.$state.notificationCount)
        userStore.$state.notificationCount++;
        console.log('after',userStore.$state.notificationCount)
        const response = await $fetch("/api/friends/send-request", {
            method: "POST",
            body: payload,
        });
        return response;
        },
    receiveNotifs: async () => {
        const response = await $fetch("/api/notifications/my-notifs", {
          method: "GET",
        });
        console.log('r', response)
        return response;
      },
      acceptFriendRequest: async (payload) => {

        const data = {
          fromId: payload.fromId,
          notifId: payload.notifId,
        }
        console.log(data)
        const response = await $fetch("/api/friends/accept-request", {
          method: "POST",
          body: data,
        });
        console.log('accept', response)
        return response;
      }
  },
});
