import { defineStore, storeToRefs } from "pinia";
// import { useUserStore } from "./userStore";
// const userStore = useUserStore();

export const useNotifStore = defineStore("notif", {
  state: () => ({ notifications: [] }),
  getters: {
    // theData: (state) => state.name,
  },
  actions: {
    sendFriendRequest: async (payload) => {
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
      }
  },
});
