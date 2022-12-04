import { defineStore } from "pinia";

export const useEditStore = defineStore("edit", {
  state: () => ({
    name: "",
    handle: "",
    location: "",
    bio: "",
    birthday: "",
  }),
  getters: {
    theData: (state) => state.name,
  },
  actions: {
    editDetails: async () => {
      const data = {
        username: useEditStore().name,
        handleName: useEditStore().handle,
        location: useEditStore().location,
        bio: useEditStore().bio,
        birthday: useEditStore().birthday,
      };
      console.log('dto4editProfile: ', data)
      const response = await $fetch("/api/profile/edit-profile", {
        method: "POST",
        body: data,
      });

      console.log(response)
      return response;
    },
  },
});
