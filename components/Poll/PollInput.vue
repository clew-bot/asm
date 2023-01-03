<style lang="scss" scoped>

</style>
<template>
    <v-text-field 
        density="compact"
        variant="solo"
        single-line=""
        hide-details 
        label="Option 1"
        class="p-2"

     >
     <template v-slot:append-inner >
        <v-icon class="cursor-pointer">{{ props.icon }}</v-icon>
        <v-icon class="cursor-pointer">mdi-close</v-icon>
     </template>
     </v-text-field>
</template>

<script setup>
const props = defineProps(['icon']);

</script>

