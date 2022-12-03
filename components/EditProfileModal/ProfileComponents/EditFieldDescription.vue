<style scoped></style>
<template>
  <div class=" absolute top-4 ml-2">
    <div class="text-base font-semibold">
      {{props.props.description}}
    </div>
    <div class="pt-32 pb-4 font-bold">{{props.props.changeDescription}}</div>
    <v-text-field
      density="compact"
      bg-color="#4b5563"
      variant="solo"
      :append-inner-icon="props.props.icon"
      :label="props.props.placeholder"
      type="email"
    ></v-text-field>
  </div>
</template>

<script setup>
const props = defineProps(['props']);
console.log(props.props)
</script>
