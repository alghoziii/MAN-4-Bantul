<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const evidenceList = computed(() => store.getters.getZonaContent.evidenceZona);
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-7xl">
    <h1 class="text-2xl md:text-3xl font-bold text-center mb-4">
      Evidence Zona <span class="text-green-500">Integritas 2024</span>
    </h1>
    <p class="text-center text-sm mb-10">
      Kelengkapan dokumen-dokumen menuju WBK dan WBBM MAN 4 Bantul
    </p>

    <div class="space-y-10">
      <div
        v-for="(item, index) in evidenceList"
        :key="index"
        class="flex flex-col md:flex-row items-center rounded-lg p-6 md:p-8"
        :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
      >
        <!-- Gambar -->
        <div class="w-full md:w-[22%]">
          <img
            :src="item.image"
            :alt="item.area"
            class="w-full h-auto rounded-lg object-cover shadow"
          />
        </div>

        <!-- Konten -->
        <div class="w-full md:w-[31%] md:px-4 mt-8 md:mt-2">
          <h2 class="text-base md:text-lg font-bold text-gray-800 mb-2">
            {{ item.area }}
          </h2>
          <p class="text-sm md:text-base text-gray-700 mb-3 text-justify leading-relaxed">
            {{ item.description }}
          </p>
          <a
            :href="item.link"
            target="_blank"
            class="text-black font-semibold hover:text-green-500 text-sm md:text-base"
          >
            Lihat Dokumen
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
