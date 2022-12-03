<style scoped>

.child {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;

}
</style>
<template>
    <div>
        <div v-if="mediaCount === 1">
              <div
                v-for="media in modelValue"
                :key="media"
              >
                <div
                class="relative overflow-hidden min-h-[30em]"
                v-if="(media.includes('.jpg') || media.includes('.png'))">
                  <v-img
                  class="child"
                    :src="media"
                  >
                  </v-img>
                </div>
                <div 
                class=""
                v-if="media.includes('.mp4')">
                  <status-video-player :media="media" />
                </div>
            </div>
          </div>
            <v-carousel
            v-else-if="(mediaCount > 1)"
            hide-delimiter-background
            :show-arrows="false"
            color="yellow"
            class="bg-[#343439]"
            vertical-delimiters="right"
            height="500"

          >
            <v-carousel-item
              v-for="media, i in modelValue"
              :key="i"
              class="flex justify-center items-center"
            >
              <div
                v-if="media.includes('.mp4')"
              >
              <status-video-player :media="media" />
              </div>
              <v-sheet
              v-else-if="media.includes('.jpg') || media.includes('.png')"
              >
                  <v-img
                    class="child"
                   :src="media"> </v-img>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          </div>
</template>

<script setup>
const { modelValue } = defineProps(["modelValue"]);
const mediaCount = Object.keys(modelValue).length
</script>

