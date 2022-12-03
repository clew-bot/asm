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
                :key="media.media"
                class=""
              >
                <div
                class=""
                :class="media.width > 900
                ? '' 
                : `relative overflow-hidden min-h-[30em]`"
                v-if="(media.media.includes('.jpg') || media.media.includes('.png'))">
                  <v-img
                  class=" cursor-pointer"
                  :class="media.width > 900
                ? '' 
                : `child`"
                    :src="media.media"
                  >
                  </v-img>
                </div>
                <div 
                v-if="media.media.includes('.mp4')">
                <div class="bg-[#212121] flex justify-center">
                    <video controls 
                    :class="media.height > 700 ? 'w-2/4 sm:w-1/2' : `w-full`"
                    class="">
                        <source :src="media.media" type="video/mp4" id="video_here">
                        Your browser does not support HTML5 video.
                    </video>
                    </div>
                  <!-- <status-video-player
                  class="cursor-pointer"
                  :media="media.media"
                  :width="media.width" /> -->
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
                v-if="media.media.includes('.mp4')"
              >
              <status-video-player
              class="cursor-pointer"
              :media="media.media" />
              </div>
              <v-sheet
              v-else-if="(media.media.includes('.jpg') || media.media.includes('.png') || media.media.includes('.gif'))"
              >
                  <v-img
                    class="child cursor-pointer"
                   :src="media.media"> </v-img>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          </div>
</template>

<script setup>
const { modelValue } = defineProps(["modelValue"]);
console.log('mvvvv', modelValue)
const mediaCount = Object.keys(modelValue).length
</script>

