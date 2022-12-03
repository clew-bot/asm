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
            <EditFieldDescription :props="editTabs" />
          </Transition>
        </div>
  </div>
</template>

<script setup>
const wantsEdit = ref(false);
const showEditValues = () => {
  wantsEdit.value = !wantsEdit.value;
};
const rules = [
  (value) => !!value || "Required.",
  (value) => (value && value.length >= 3) || "Min 3 characters",
];

const showEditField = (label) => {
  console.log(label);
  reset();
  nextTick(() => {
    switch (label) {
      case "Name":
        editValues.value[0].name.show = true;
        break;
      case "Handle":
        editValues.value[0].handle.show = true;
        break;
      case "Location":
        editValues.value[0].location.show = true;
        break;
      case "Birthday":
        editValues.value[0].birthday.show = true;
        break;
      case "Profile Photo":
        editValues.value[0].profilePhoto.show = true;
        break;
    }
  });
};

const editValues = ref([
  {
    name: {
      value: "Name",
      icon: "mdi-account",
      show: false,
      description:
        "This is the name displayed everywhere you comment, message, or post a status.",
      changeDescription: "Change your name here.",
      placeholder: "Mark Twain",
    },
    handle: {
      value: "Handle",
      icon: "mdi-at",
      show: false,
      description: "This is the handle people use to tag or reach you at",
      changeDescription: "Change your handle here.",
      placeholder: "@MarkTwain69",
    },
    location: {
      value: "Location",
      icon: "mdi-map-marker",
      show: false,
      description: "This is the location people can see you at on your profile",
      changeDescription: "Change your Location here.",
      placeholder: "San Fransisco, CA",
    },
    birthday: {
      value: "Birthday",
      icon: "mdi-calendar",
      show: false,
      description: "This is the birthday people can see you at on your profile",
      changeDescription: "Change your Birthday here.",
      placeholder: "July 21, 1995",
    },
    profilePhoto: {
      value: "Profile Photo",
      icon: "mdi-image",
      show: false,
      description:
        "This is the profile photo people can see you at on your profile",
      changeDescription: "Change your Profile Photo here.",
    },
  },
]);

const reset = () => {
  editValues.value[0].name.show = false;
  editValues.value[0].handle.show = false;
  editValues.value[0].location.show = false;
  editValues.value[0].birthday.show = false;
  editValues.value[0].profilePhoto.show = false;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  /* transition: opacity 0.5s ease; */
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
