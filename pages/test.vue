<template>
<ClientOnly>
    <div class="p-52"></div>
    <v-tooltip
    position-x="99"
    position-y="99"
    :open-on-hover="true"
    top>
      <template #activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
          v-on="props"
        >
          Bottom
        </v-btn>
      </template>
      <span>Bottom tooltip</span>
    </v-tooltip>
</ClientOnly>
        

</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>