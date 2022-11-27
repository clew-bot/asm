import { defineStore } from "pinia"


export const usePostStore = defineStore('post', {
    state: () => ({ post: '' }),
    getters: {
    //   doubleCount: (state) => state.name
    },
    actions: {
      composePost: async (payload) => {
        const data = {
            post: usePostStore().post,
        }
        const response = await $fetch("/api/dashboard/compose", {
          method: "POST",
          body: data
        })
        return response;
      },
      check: async (payload)  => {
        console.log(usePostStore().post)
      },
      logout: async () => {
        const response = await $fetch("/api/user/logout-user", {
          method: "GET",
        });
        return response;
      }
    },
  })

