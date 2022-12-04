<style>
.v-overlay__scrim {
    background-color: rgb(0, 0, 0) !important;; 
} 
</style>
<template>
    <div>
        <v-menu
        close-on-content-click
        >
      <template v-slot:activator="{ props }">
        <IconComponent
        v-bind="props"
                class="mr-2"
                :props="{
                  name: 'mdi-dots-horizontal',
                  color: 'var(--postIcon)',
                }"
              />
      </template>
      <v-list>
        <v-list-item>
            <v-list-item-title>
              <StatusPostOptionsDeleteOption :id="props.id"/>
            </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';
import { useUserStore } from '~~/store/userStore';
const userStore = useUserStore();
const store = usePostStore();
const props = defineProps(['id']);

onMounted(() => {
})
</script>

