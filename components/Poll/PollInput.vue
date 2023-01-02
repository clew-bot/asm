<style lang="scss" scoped>

</style>
<template>
    <v-text-field 
        density="compact"
        variant="solo"
        single-line=""
        hide-details 
        label="Option 1"
        v-model="option1"

     >
     <template v-slot:append-inner >
        <v-icon>mdi-dots-grid</v-icon>
        <v-icon>mdi-close</v-icon>
     </template>
     </v-text-field>
</template>

<script setup>

</script>

