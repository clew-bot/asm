<template>
       <div 
        class="cursor-pointer">
            <v-icon 
                :color="color"
                size="small"
                >
                {{name}}
            </v-icon>
            </div>
</template>

<script setup>
const { props } = defineProps([ 'props' ])
const { name, color } = props
</script>