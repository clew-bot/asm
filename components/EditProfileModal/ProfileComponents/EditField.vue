<style scoped></style>
<template>
          <div 
            class="cursor-default flex items-center p-3 hover:bg-slate-500 transition-all rounded  mt-5">
                <IconComponent :props="{ name: props.props.icon, size: 'default' }" />
                <div class="pl-2 hidden sm:block">{{props.props.value}}</div>
            </div>
</template>

<script setup>
const props = defineProps(['props']);
</script>
