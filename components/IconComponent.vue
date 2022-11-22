<template>
       <div 
        class="cursor-pointer">
            <v-icon 
                class="hover:text-[var(--blueHover)] transition-all"
                color="var(--blue)"
                size="small"
                >
                {{name}}
            </v-icon>
            </div>
</template>

<script setup>
const { props } = defineProps([ 'props' ])
const { name } = props
</script>