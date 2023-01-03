<style scoped></style>
<template>
  <!-- <div class="p-4 bg-zinc-600 flex flex-col gap-2">
    <div v-for="poll in pollOptions" :key="poll">
      <PollInput />
    </div>
    <IconComponent
      :props="{ name: 'mdi-plus', color: 'var(--postIcon)' }"
      @click="addPoll"
    />
  </div> -->
  <draggable :list="items" 
               item-key="name"
               @change="onChange"
               >
        <template #item="{ element }">
            <div class="list-group-item">
                <!-- {{ element }} -->
                <PollInput :icon="element.icon"/>
            </div>
        </template>
    </draggable>

    <!-- <button @click="check">check</button> -->
</template>

<script setup>
import draggable from "vuedraggable";
const items = ref([
  {
    id: 1,
    name: "Yo",
    icon: "mdi-dots-grid",
  },
  {
    id: 2,
    name: "Hi",
    icon: "mdi-dots-grid",
  },
  {
    id: 3,
    name: "Bitch!",
    icon: "mdi-dots-grid",
  },
]);

const check = () => {
    console.log(items.value)
}

const onChange = (event) => {
  reOrder();
};

const reOrder = (event) => {
    pollOptions.value.forEach((poll, index) => {
      poll.order = index + 1;
    });
};

// drag and drop for poll options
const addPoll = () => {
  pollOptions.value += 1;
};
</script>
