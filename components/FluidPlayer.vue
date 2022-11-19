<template>
    <ClientOnly>
    <div class="fluid-component">
        <video ref="myVideoPlayer">
            <source src='https://cdn.fluidplayer.com/videos/valerian-1080p.mkv'
                    data-fluid-hd
                    title="1080p"
                    type='video/mp4'/>
        </video>
    </div>
</ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import fluidPlayer from 'fluid-player';

const player = ref(null);
const myVideoPlayer = ref(null);

onMounted(() => {
    console.log("hi")
    player.value = fluidPlayer(myVideoPlayer)
})

onUnmounted(() => {
    player.value.destroy();
})

</script>

<style scoped>
/* @import "~~fluid-player/src/css/fluidplayer.css"; */
div.fluid-component, div.fluid-component > video {
        width: 100%;
        height: 100%;
    }
</style>