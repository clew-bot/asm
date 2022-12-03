<style lang="scss" scoped>
</style>
<template>
    <div>
        <div v-if="mediaCount === 1">
            <div class="flex justify-center">
              <div
                v-for="media in modelValue"
                :key="media"
                class="w-full flex justify-center bg-[#212121]"
              >
              <!-- {{media}} -->
                <div
                class="w-full"
                v-if="(media.includes('.jpg') || media.includes('.png'))">
                  <v-img
                    :src="media"
                    class="min-h-96 max-h-[37rem] sm:max-h-[40rem] min-w-full"
                  >
                  </v-img>
                </div>
                <div 
                class="w-full"
                v-if="media.includes('.mp4')">
                <div class="">
                    <video
                        :src="media"
                        controls
                        class="min-h-96 max-h-[37rem] sm:max-h-[40rem] min-w-full"
                    >
                    </video>
                </div>
            </div>
              </div>
            </div>
          </div>
            <v-carousel
            v-else-if="(mediaCount > 1)"
            height="500"
            hide-delimiter-background
            :show-arrows="false"
            class="w-full"
            color="grey"
            vertical-delimiters="right"
          >
            <v-carousel-item
              v-for="(slide, i) in modelValue"
              :key="i"
              class="w-f"
            >
              <div
                v-if="slide.includes('.mp4')"
                class="d-flex justify-center align-center h-full bg-[#212121]"
              >
                <video controls class="h-full">
                  <source :src="slide" type="video/mp4"/>
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <v-sheet
              v-else-if="slide.includes('.jpg') || slide.includes('.png')"
              height="100%">
                  <v-img :src="slide"> </v-img>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          </div>
</template>

<script setup>
const { modelValue } = defineProps(["modelValue"]);
const mediaCount = Object.keys(modelValue).length
</script>

