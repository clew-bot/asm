<style scoped>
.editProfile >>> .v-overlay__content {
  max-width: 550px !important;
}

.editProfile >>> .v-card-text {
  padding: 0rem 1rem 1rem 1rem !important;
}

.editProfile >>> .v-card {
    width:50rem !important;
    min-height: max-content !important;
}
</style>
<template>
  <v-dialog v-model="dialog" persistent class="editProfile">
    <template v-slot:activator="{ props }">
        <v-btn
            color="white"
            prepend-icon="mdi-cog"
            class="rounded-2xl text-sky-200"
            v-bind="props"
            >Edit Profile</v-btn>
    </template>

    <div class="flex justify-center">
      <v-card class="p-2 max-w-[999px]">
        <v-card-title
          class="text-2xl font-bold text-amber-200 flex justify-between items-end border-b-[.2px] border-b-[var(--dashBorder)]"
        >
          EDIT PROFILE
          <IconComponent
            class="mb-1"
            :props="{ name: 'mdi-close', size: 'medium' }"
          />
        </v-card-title>
        <v-card-text>
          <div class="flex">
            <div class="flex relative">
              <v-tabs
                v-model="theTab"
                class="font-bold text-xl"
              >
                <v-tab
                v-for="tab in tabs"
                :key="tab"
                  class="hover:text-zinc-400 cursor-pointer transition-all"
                >
                  {{ tab }}
                </v-tab>
              </v-tabs>
              <!-- <div class="border-2 absolute -top-4 left-32 h-[10.3rem]"></div> -->
            </div>
            <div class="p-2"></div>
          </div>
          <v-window v-model="theTab" direction="vertical">
            <v-window-item v-for="n in tabs" :key="`card-${n}`">
                <div class="w-full"  v-if="theTab === 0">
                    <ProfileTab />
                </div>
                <div v-if="theTab === 1">
                    <AboutTab />
                </div>
                <div v-if="theTab === 2">
                    <SettingsTab />
                </div>
            </v-window-item>
          </v-window>
        </v-card-text>
        <div class="border"></div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="checkMe">hi</v-btn>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
 
</template>

<script setup>
const dialog = ref(false);
const currentItem = ref("tab-Profile");
const tabs = ref(["PROFILE", "ABOUT", "SETTINGS"]);
const theTab = ref("PROFILE");

const openTab = (tab) => {
  console.log(tab);
  theTab.value = tab;
};

const checkMe = () => {
  console.log(theTab.value);
};
</script>
