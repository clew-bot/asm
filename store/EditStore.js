import { defineStore, storeToRefs } from "pinia";

export const useEditStore = defineStore("edit", {
  state: () => ({
    name: "",
    handle: "",
    location: "",
    bio: "",
    birthday: "",
    profilePicturePreview: {
      preview: "",
      file: [],
    },
    profilePicture: "",
    coverPicturePreview: {
      preview: "",
      file: [],
    },
    coverPicture: "",
  }),
  getters: {
    theData: (state) => state.name,
  },
  actions: {
    editDetails: async () => {

      console.log(useEditStore().profilePicturePreview.file === null)
      console.log('ggg', useEditStore().profilePicturePreview.file);

      if(useEditStore().profilePicturePreview.file.length > 0) {
        const { media } = await useFile(useEditStore().profilePicturePreview.file)
        console.log('imageData', media)
        if (media) {
          useEditStore().profilePicture = media[0].media;
        }
      }

      const data = {
        username: useEditStore().name,
        handleName: useEditStore().handle,
        location: useEditStore().location,
        bio: useEditStore().bio,
        birthday: useEditStore().birthday,
        profilePicture: useEditStore().profilePicture,
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
