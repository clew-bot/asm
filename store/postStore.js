import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
const userStore = useUserStore();

export const usePostStore = defineStore("post", {
  state: () => ({
    post: "",
    posts: [],
    images: [],
    pageCount: 0,
    refresh: 0,
    postsFull: false,
  }),
  getters: {
    thePost: (state) => state.post,
    compRefresh: (state) => state.refresh,
  },
  actions: {
    composePost: async (payload) => {
      // console.log("The payload for compose post: ", payload);
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
      usePostStore().posts.unshift(response.populatedPost);
      // useUserStore().posts.unshift(response.populatedPost);
      return response;
    },
    postComment: async (payload) => {
      const response = await $fetch("/api/dashboard/post-comment", {
        method: "POST",
        body: payload,
      });
      return response;
    },
    addReaction: async (payload) => {
      const response = await $fetch("/api/dashboard/add-reaction", {
        method: "POST",
        body: payload,
      });
      console.log(response)
      return response;
    },
    check: async (payload) => {
      // console.log(usePostStore().post);
    },
    getPosts: async (payload) => {
      const response = await $fetch("/api/dashboard/get-posts", {
        method: "POST",
        body: usePostStore().pageCount,
      });
      //  dont duplicate posts
      if( usePostStore().pageCount === 0) {
        usePostStore().posts = response;
        return response;
      } else {
        usePostStore().posts.push(...response);
        console.log("The posts: ", usePostStore().posts);
        return response;
      }
 
    },
    pinPost: async (payload) => {
      const response = await $fetch("/api/dashboard/pin-post", {
        method: "POST",
        body: payload,
      });
      return response;
    },
    getPinnedPost: async (payload) => {
      console.log('userStore.pinnedPost', userStore.pinnedPost)
      const response = await $fetch("/api/dashboard/get-pinned-post", {
        method: "POST",
        body: userStore.pinnedPost,
      });
      console.log('r323232', response)
      return response;
    },
    getCommentsForPost: async (payload) => {
      const response = await $fetch("/api/dashboard/get-comments-for-post", {
        method: "POST",
        body: payload,
      });
      return response;
    },
    deletePost: async (payload) => {
      const response = await $fetch("/api/dashboard/delete", {
        method: "POST",
        body: payload,
      });
      const findIndex = usePostStore().posts.findIndex(
        (post) => post._id === payload
      );
      usePostStore().posts.splice(findIndex, 1);
      const findIndex2 = useUserStore().posts.findIndex(
          (post) => post._id === payload
        );
        useUserStore().posts.splice(findIndex2, 1);

      return response;
    },
    getRefresh: (state) => {
      usePostStore().refresh++;
    },
  },
});
