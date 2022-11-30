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
    <v-tabs v-model="currentItem" grow color="#ffedd5" bg-color="#27272a">
      <v-tab v-for="item in items" :key="item" :value="'tab-' + item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-window direction="vertical" v-model="currentItem">
      <v-window-item v-for="item in items" :key="item" :value="'tab-' + item">
        <v-card flat>
          <div v-if="currentItem === 'tab-Your Posts'">
            <div v-if="passProps.length > 0">
              <ProfileYourPostsTab :props="passProps" />
            </div>
            <div v-else>
              You have no new posts. Hell you don't even have any posts.
            </div>
          </div>
          <div v-else>
            <ProfileYourFriendsTab />
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
  <div class="h-[50rem]"></div>
</template>

<script setup>
const currentItem = ref("tab-Web");
const items = ref(["Your Posts", "Your Friends"]);
const components = ref(["Your Posts", "Your Friends"]);
const props = defineProps(["props"]);
const passProps = props.props;

const checkValues = () => {
  console.log(currentItem.value);
};
</script>
