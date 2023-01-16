<style lang="scss" scoped>

</style>
<template>
    <v-text-field 
        density="compact"
        variant="solo"
        single-line=""
        hide-details 
        :label="props.label"
        class="p-2"
        :id="props.id"
        v-model="props.value"
     >
     <template v-slot:append-inner >
        <v-icon class="handle cursor-pointer">{{ props.icon }}</v-icon>
        <v-icon class="cursor-pointer">mdi-close</v-icon>
     </template>
     </v-text-field>
</template>

<script setup>
const props = defineProps(['icon', 'label', 'value']);



const text = ref('')

</script>

