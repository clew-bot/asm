import { defineStore } from "pinia"


export const useUserStore = defineStore('user', {
    state: () => ({ name: '', email: '' }),
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
        console.log(response)
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
      }
    },
  })

