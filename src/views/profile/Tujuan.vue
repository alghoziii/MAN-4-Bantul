<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const content = computed(() => store.getters.getProfileContent.tujuan);
</script>

<template>
  <section class="container mx-auto max-w-6xl px-4 py-10">
    <!-- Judul -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
      <span class="text-black">Tujuan </span>
      <span class="text-green-500">Madrasah</span>
    </h2>

    <!-- Tujuan Umum -->
    <div class="mb-10">
      <h3 class="text-xl font-semibold mb-4">1. Tujuan Umum</h3>
      <p class="text-gray-700 leading-relaxed text-justify">
        {{ content.tujuanUmum }}
      </p>
    </div>

    <!-- Tujuan Khusus -->
    <div>
      <h3 class="text-xl font-semibold mb-6">2. Tujuan Khusus</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Akademis -->
        <div>
          <h4 class="text-lg font-bold mb-3">A. Akademis</h4>
          <ul class="space-y-3 list-disc list-inside text-gray-700">
            <li
              v-for="(item, index) in content.tujuanKhusus.akademis"
              :key="'akademis-' + index"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Non Akademis -->
        <div>
          <h4 class="text-lg font-bold mb-3">B. Non Akademis</h4>
          <ul class="space-y-3 list-disc list-inside text-gray-700">
            <li
              v-for="(item, index) in content.tujuanKhusus.nonAkademis"
              :key="'nonakademis-' + index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
