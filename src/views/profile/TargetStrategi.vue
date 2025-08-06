<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const content = computed(() => store.getters.getProfileContent.targetStrategi);
</script>

<template>
  <section class="container mx-auto max-w-6xl px-4 py-10">
    <!-- Judul -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
      <span class="text-black">Target dan </span>
      <span class="text-green-500">Strategi Madrasah</span>
    </h2>

    <!-- Target -->
    <div class="mb-10">
      <h3 class="text-xl font-semibold mb-6">A. Target</h3>
      <p class="mb-4">
        Adapun target yang ingin dicapai MAN 4 Bantul selama satu tahun
        pelajaran dijabarkan sebagai berikut:
      </p>

      <!-- Loop Target -->
      <div
        v-for="(items, kategori, index) in content.target"
        :key="kategori"
        class="mb-6"
      >
        <!-- Kategori dengan angka -->
        <div class="text-lg font-semibold mb-3">
          {{ index + 1 }}. {{ kategori }}
        </div>

        <!-- Item list -->
        <ul
          :class="[
            'space-y-3 list-inside text-gray-700',
            kategori.includes('Akademik') ? 'list-decimal' : 'list-disc'
          ]"
        >
          <li v-for="(item, idx) in items" :key="idx">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- Strategi -->
    <div>
      <h3 class="text-xl font-semibold mb-6">B. Strategi</h3>
      <ul class="space-y-3 list-disc list-inside text-gray-700">
        <li v-for="(item, index) in content.strategi" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
