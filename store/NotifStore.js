import { defineStore, storeToRefs } from "pinia";
import { useUserStore } from "./userStore";
const userStore = useUserStore();

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
        if(response.length === userStore.$state.notifications.length){
          return;
        } else {
          useNotifStore().notifications = response;
          return response;
        }

      },
      acceptFriendRequest: async (payload) => {
        console.log(payload)
        const response = await $fetch("/api/friends/accept-request", {
          method: "POST",
          body: payload,
        });
        console.log('accept', response)
        return response;
      },

      declineFriendRequest: async (payload) => {
        const index = useNotifStore().notifications.findIndex((notif) => notif._id === payload.notifId);
        useNotifStore().notifications.splice(index, 1);
        const response = await $fetch("/api/friends/decline-request", {
          method: "POST",
          body: payload,
        });
        useNotifStore().notifications.unshift(response);
        console.log('12312312', useNotifStore().notifications)
        return response;
      }
  },
});
