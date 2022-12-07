import { defineStore } from "pinia"
import { usePostStore } from "./postStore"


export const useUserStore = defineStore('user', {
    state: () => (
      { name: '', 
        email: '', 
        posts: [],
        userPosts: [],
        userId: '',
        profilePicture: '',
        friends: [],
        myProfile: [],
        friendRequestsSent: [],
       }),
    getters: {
       mId: (state) => state.id,
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
          useUserStore().userId = response._id;
        }
        
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
      },
      getProfileInfo: async (payload) => {
        const response = await $fetch("/api/profile/get-profile", {
          method: "POST",
          body: payload
        });
        useUserStore().posts = response.posts;
        return response;
      },
      getProfileInfoForUser: async (payload) => {
        const response = await $fetch("/api/profile/get-user", {
          method: "POST",
          body: payload,
        });
        useUserStore().userPosts = response.posts;
        // console.log('getprofileforuser', useUserStore().userPosts)
        return response;
      },
      getUser: async () => {
        const response = await $fetch("/api/user/user-id", {
          method: "GET",
        });
        console.log('response', response)
        useUserStore().userId = response.id;
        useUserStore().profilePicture = response.profilePicture;
        useUserStore().friends = response.friends;
        useUserStore().friendRequestsSent = response.friendRequestsSent;
      }
    },
  })

