import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.name
    },
    actions: {
      signUp: async (payload)  => {
        console.log("Hi", payload);
        const response = await $fetch("/api/user/create-account", {
          method: "POST",
          body: payload,
        });
        return response;
      }
    },
  })

