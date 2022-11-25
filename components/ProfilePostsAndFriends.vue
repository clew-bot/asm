<style scoped>
.tabber >>> .v-tabs--fixed-tabs .v-slide-group__content > *:first-child {
  -webkit-margin-start: 0px !important;
  margin-inline-start: 0px !important;
  max-width: none !important;
  width: 50% !important;
}

.tabber >>> .v-tabs--fixed-tabs .v-slide-group__content > *:last-child {
  margin-inline-end: 0px !important;
  -webkit-margin-end: 0px !important;
  max-width: none !important;
  width: 50% !important;
}

.tabber >>> .v-slide-group__content {
  justify-content: space-between !important;
}

.tabber >>> .v-slide-group__content,
.v-slide-group__container {
  border-radius: 0px !important;
}

.v-card {
  border-radius: 0px !important;
}
</style>
<template>
  <v-card class="mt-6 tabber min-w-screen">
    <v-tabs v-model="currentItem" grow 
    color="#ffedd5" bg-color="#27272a">
      <v-tab v-for="item in items" :key="item" :value="'tab-' + item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-window 
      direction="vertical"
      v-model="currentItem">
      <v-window-item v-for="item in items" :key="item" :value="'tab-' + item">
        <v-card flat>
          <div v-if="currentItem === 'tab-Your Posts'">
            <YourPostsTab />
          </div>
          <div v-else>
            <YourFriendsTab />
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
  <v-card>
    <!-- <v-tabs
          v-model="currentItem"
          fixed-tabs
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :value="'tab-' + item"
          >
            {{ item }}
          </v-tab>
        </v-tabs> -->
    <!-- <v-window v-model="currentItem">
      <v-window-item
        v-for="item in items.concat(more)"
        :key="item"
        :value="'tab-' + item"
      >
        <v-card flat>
          <v-card-text>
            <h2>{{ item }}</h2>
            {{ text }}
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window> -->
  </v-card>
  <v-btn color="orange" @click="checkValues">CLick</v-btn>
  <div class="h-[50rem] border-2"></div>
</template>

<script setup>
import YourFriendsTab from "@/components/YourFriendsTab.vue";
import YourPostsTab from "@/components/YourPostsTab.vue";
const currentItem = ref("tab-Web");
const items = ref(["Your Posts", "Your Friends"]);
const components = ref(["Your Posts", "Your Friends"]);
const more = ref(["News", "Maps", "Books", "Flights", "Apps"]);
const text = ref(
  "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor e magna aliqua. Ut enim ation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rem ipsum dolor sit amet, consecte'"
);

const checkValues = () => {
  console.log(currentItem.value);
};
</script>
