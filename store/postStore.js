import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
  state: () => ({ post: "", posts: [], images: [] }),
  getters: {
    thePost: (state) => state.post,
  },
  actions: {
    composePost: async (payload) => {
      // const images = payload?.images;
      // const videos = payload?.videos;
      // const media = payload?.media;
      console.log('The payload for compose post: ', payload)
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
  },
});
