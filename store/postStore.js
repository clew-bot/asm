import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
const userState = useUserStore();
export const usePostStore = defineStore("post", {
  state: () => ({ post: "", posts: [], images: [], pageCount: 0, refresh: 0, postsFull: false }),
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
      console.log('response from compose post: ', response)
      // unshift the new post to the top of the posts array
      usePostStore().posts.unshift(response.populatedPost);
      console.log('posts after unshift: ', usePostStore().posts)
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
    getPosts: async (payload) => {
      console.log('dp',usePostStore().pageCount)
      const response = await $fetch("/api/dashboard/get-posts", {
        method: "POST",
        body: usePostStore().pageCount,
      });
      console.log("The response from get posts: ", response);
      usePostStore().posts.push(...response);
      console.log("The posts: ", usePostStore().posts);
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
      console.log('delete payload', payload)
      const response = await $fetch("/api/dashboard/delete", {
        method: "POST",
        body: payload,
      });
      // usePostStore().getRefresh();
      // remove the deleted post from the posts array
      console.log('before delete', usePostStore().posts)
      // const filteredPosts =  usePostStore().posts.filter((post, i) => {
      //   console.log(post._id !== payload)
      //   if(post._id !== payload){
      //     return i
      //   }})
      const findIndex = usePostStore().posts.findIndex((post) => post._id === payload)
        console.log('filtered index', findIndex)
        usePostStore().posts.splice(findIndex, 1)
      console.log('posts after delete: ', usePostStore().posts)
      
      return response;
    },
    getRefresh: (state) => {
      usePostStore().refresh++
      console.log("The refresh: ", usePostStore().refresh)
    }
  },
});
