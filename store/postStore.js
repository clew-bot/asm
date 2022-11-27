import { defineStore } from "pinia"


export const usePostStore = defineStore('post', {
    state: () => ({ post: '' }),
    getters: {
      thePost: (state) => state.post
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
      getPosts: async () => {
        const response = await $fetch("/api/dashboard/get-posts", {
          method: "GET",
        });
        return response;
      }
    },
  })

