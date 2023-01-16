<style scoped></style>
<template>
  <draggable
  v-model="items"
  item-key="id"
               >
        <template #item="{ element }">
            <div class="list-group-item">
                <!-- {{ element }} -->
                <!-- <PollInput :value="element.value" :icon="element.icon" :label="element.label"/> -->
                <v-text-field 
                    density="compact"
                    variant="solo"
                    bg-color="red"
                    single-line=""
                    hide-details 
                    :label="element.label"
                    class="p-2"
                    v-model="element.value"
                >
                <template v-slot:append-inner >
                    <v-icon class="handle cursor-pointer">{{ element.icon }}</v-icon>
                    <v-icon 
                    @click="handleClose(element.id)"
                    class="cursor-pointer">mdi-close</v-icon>
                </template>
                </v-text-field>
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
    label: "Option 1",
    icon: "mdi-dots-grid",
    value: "",
  },
  {
    id: 2,
    label: "Option 2",
    icon: "mdi-dots-grid",
    value: "",
  },
  {
    id: 3,
    label: "Option 3",
    icon: "mdi-dots-grid",
    value: "",
  },
]);

const handleClose = (event) => {
    console.log(event)
    for (let i = 0; i < items.value.length; i++) {
        if (items.value[i].id === event) {
            items.value.splice(i, 1);
        }
    }
}

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
