
<style scoped></style>
<template>
<div 
v-for="editTabs in editValues[0]"
    :key="editTabs"
class="flex justify-start">
    <div 
    class="flex flex-col w-1/6 sm:w-2/6">
        <div
        >
            <EditField
            @mouseenter="showEditField(editTabs.value)"
            :props="editTabs"
            :class="{'bg-slate-500' : editTabs.show}" />
        </div>
    </div>
    <div v-if="editTabs.show"
    class="h-fit">
          <Transition>
            <EditPicture :props="editTabs" />
          </Transition>
        </div>
  </div>
</template>

<script setup>
const rules = [
  (value) => !!value || "Required.",
  (value) => (value && value.length >= 3) || "Min 3 characters",
];

const showEditField = (label) => {
  reset();
  nextTick(() => {
    switch (label) {
      case "Profile Picture":
        editValues.value[0].profilePic.show = true;
        break;
      case "Cover Photo":
        editValues.value[0].coverPhoto.show = true;
        break;
    //   case "Privacy":
    //     editValues.value[0].privacy.show = true;
    //     break;
    //   case "Birthday":
    //     editValues.value[0].birthday.show = true;
    //     break;
    //   case "Bio":
    //     editValues.value[0].bio.show = true;
    //     break;
    }
  });
};

const editValues = ref([
  {
    profilePic: {
      value: "Profile Picture",
      name: "ProfilePicture",
      icon: "mdi-camera",
      show: true,
      description:
        "This is the picture that will be displayed on your account.",
      changeDescription: "Update your profile picture here.",
      placeholder: "Upload",
    },
    coverPhoto: {
      value: "Cover Photo",
      icon: "mdi-image",
      name: "CoverPhoto",
      show: false,
      description: "This is the picture that will be displayed on your profile page.",
      changeDescription: "Update your cover photo here.",
      placeholder: "Upload",
    },
    // privacy: {
    //   value: "Privacy",
    //   icon: "mdi-lock",
    //   name: "location",
    //   show: false,
    //   description: "Update your privacy settings here.",
    //   changeDescription: "Update your privacy settings here.",
    //   placeholder: "",
    // },
    // birthday: {
    //   value: "Birthday",
    //   icon: "mdi-calendar",
    //   name: "birthday",
    //   show: false,
    //   description: "This is the birthday people can see you at on your profile",
    //   changeDescription: "Change your Birthday here.",
    //   placeholder: "August 8, 1995",
    // },
    // bio: {
    //   value: "Bio",
    //   icon: "mdi-fountain-pen-tip",
    //   name: "bio",
    //   show: false,
    //   description:
    //     "This is the bio people can see you at on your profile. It can be anything you want.",
    //   changeDescription: "Update your bio here.",
    // },
  },
]);

const reset = () => {
  editValues.value[0].profilePic.show = false;
  editValues.value[0].coverPhoto.show = false;
//   editValues.value[0].privacy.show = false;
//   editValues.value[0].birthday.show = false;
//   editValues.value[0].bio.show = false;
};
</script>