import { defineStore } from "pinia"
export const useUserStore = defineStore('user', {
    state: () => (
      { name: '', 
        email: '', 
        posts: [],
        userId: '',
        profilePicture: ''
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
      getProfileInfo: async () => {
        const response = await $fetch("/api/profile/get-profile", {
          method: "GET",
        });
        useUserStore().posts = response
        return response;
      },
      getProfileInfoForUser: async (payload) => {
        const response = await $fetch("/api/profile/get-user", {
          method: "POST",
          body: payload,
        });
        return response;
      },
      getUser: async () => {
        const response = await $fetch("/api/user/user-id", {
          method: "GET",
        });
        useUserStore().userId = response.id;
        useUserStore().profilePicture = response.profilePicture;
        console.log(response)
        console.log('222', useUserStore().profilePicture)

      }
    },
  })

