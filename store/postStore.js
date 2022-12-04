import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
const userState = useUserStore();
export const usePostStore = defineStore("post", {
  state: () => ({ post: "", posts: [], images: [], refresh: 0 }),
  getters: {
    thePost: (state) => state.post,
    compRefresh: (state) => state.refresh,

  },
  actions: {
    composePost: async (payload) => {
      console.log("The payload for compose post: ", payload);
      const data = {
        post: usePostStore().post,
        postImages: payload?.images,
        postVideos: payload?.videos,
        postMedia: payload?.media,
      };

      const response = await $fetch("/api/dashboard/compose", {
        method: "POST",
        body: data,
      });
      usePostStore().images = [];
      return response;
    },
    postComment: async (payload) => {
      const response = await $fetch("/api/dashboard/post-comment", {
        method: "POST",
        body: payload,
      });
      return response;
    },
    check: async (payload) => {
      console.log(usePostStore().post);
    },
    getPosts: async () => {
      const response = await $fetch("/api/dashboard/get-posts", {
        method: "GET",
      });
      console.log("The response from get posts: ", response);
      usePostStore().posts = response;
      return response;
    },
    getCommentsForPost: async (payload) => {
      const response = await $fetch("/api/dashboard/get-comments-for-post", {
        method: "POST",
        body: payload,
      });
      return response;
    },
    deletePost : async (payload) => {
      const response = await $fetch("/api/dashboard/delete", {
        method: "POST",
        body: payload,
      });
      // usePostStore().getRefresh();
      return response;
    },
    getRefresh: (state) => {
      usePostStore().refresh++
      console.log("The refresh: ", usePostStore().refresh)
    }
  },
});
