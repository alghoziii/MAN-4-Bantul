<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  label: String,
  items: Array,
  path: String,
});

const route = useRoute();

const isActive = computed(() => {
  return route.path.startsWith(props.path);
});
</script>
<template>
  <div class="group relative">
    <button
      :class="[
        'hover:text-yellow-300 transition-colors duration-200 flex items-center',
        isActive ? 'text-yellow-300 font-medium' : '',
      ]"
    >
      {{ label }} <span class="ml-1 text-xs">▼</span>
    </button>
    <div
      class="absolute left-0 mt-0 w-48 bg-white text-black rounded-md shadow-lg py-1 z-10 hidden group-hover:block border border-gray-200"
    >
      <div class="absolute h-2 w-full bg-transparent" style="top: -8px"></div>

      <template v-for="item in items" :key="item.id">
        <!-- eksternal link -->
        <a
          v-if="item.route.startsWith('http')"
          :href="item.route"
          target="_blank"
          rel="noopener noreferrer"
          class="block px-4 py-2 hover:bg-green-500 hover:text-white transition-colors duration-200"
        >
          {{ item.title }}
        </a>

        <!-- internal route -->
        <router-link
          v-else
          :to="item.route"
          class="block px-4 py-2 hover:bg-green-500 hover:text-white transition-colors duration-200"
        >
          {{ item.title }}
        </router-link>
      </template>
    </div>
  </div>
</template>
