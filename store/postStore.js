import { defineStore } from "pinia"


export const usePostStore = defineStore('post', {
    state: () => ({ post: '', posts: [] }),
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
      postComment: async (payload) => {
        const response = await $fetch("/api/dashboard/post-comment", {
          method: "POST",
          body: payload
        })
        console.log("yoooo", response)
        return response;
      }
    ,
      check: async (payload)  => {
        console.log(usePostStore().post)
      },
      getPosts: async () => {
        const response = await $fetch("/api/dashboard/get-posts", {
          method: "GET",
        });
        usePostStore().posts = response;
        return response
      },
      getCommentsForPost: async (payload) => {
        const response = await $fetch("/api/dashboard/get-comments-for-post", {
          method: "POST",
          body: payload
        });
        return response
      }
    },
  })

