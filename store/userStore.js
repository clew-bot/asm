import { defineStore } from "pinia"


export const useUserStore = defineStore('user', {
    state: () => ({ name: '', email: '', posts: [] }),
    getters: {
      // doubleCount: (state) => state.name
    },
    actions: {
      login: async (payload) => {
        const response = await $fetch("/api/user/login", {
          method: "POST",
          body: payload
        })
        if (response.name) {
          useUserStore().name = response.name;
          useUserStore().email = response.email;
        }
        return response;
      },
      signUp: async (payload)  => {
        const response = await $fetch("/api/user/create-account", {
          method: "POST",
          body: payload,
        });
        return response;
      },
      logout: async () => {
        const response = await $fetch("/api/user/logout-user", {
          method: "GET",
        });
        return response;
      },
      getProfileInfo: async () => {
        const response = await $fetch("/api/profile/get-profile", {
          method: "GET",
        });
        useUserStore().posts = response.posts;
        return response;
      },
      getProfileInfoForUser: async (payload) => {
        const response = await $fetch("/api/profile/get-user", {
          method: "POST",
          body: payload,
        });
        return response;
      }
    },
  })

