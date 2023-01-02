<style scoped>

</style>
<template>
    <div class="p-4 bg-zinc-600 flex flex-col gap-2">
        <!-- <div class="border-2">Hello World!</div> -->
        <div v-for="poll in pollOptions" :key="poll">
            <PollInput />
        </div>
        <IconComponent
            :props="{ name: 'mdi-plus', color: 'var(--postIcon)' }"
            @click="addPoll"/>
    </div>
</template>

<script setup>
const pollOptions = ref(2);

const addPoll = () => {
    pollOptions.value += 1;
}


</script>

