import { defineStore } from "pinia"


export const useUserStore = defineStore('user', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.name
    },
    actions: {
      login: async (payload) => {
        const response = await $fetch("/api/user/login", {
          method: "POST",
          body: payload
        })
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

