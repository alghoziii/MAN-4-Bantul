<script setup>
import Kalender from "@/components/Kalender.vue";
import { computed } from "vue";
import { useStore } from "vuex";


const store = useStore();
const content = computed(() => store.getters.getKalenderAkademik);
</script>

<template>
  <section class="mx-auto max-w-lg py-4 mt-4 px-4">
    <h2 class="text-4xl font-bold text-center mb-8 text-blue-800 ">{{ content.title }}</h2>
    <Kalender/>
  </section>
</template>