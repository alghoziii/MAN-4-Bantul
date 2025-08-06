<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const index = Number(route.params.index);
// Ambil detail prestasi dari store berdasarkan index
const integritas = computed(
  () => store.getters.getZonaContent.zonaIntegritas[index]
);

const goBack = () => {
  router.push({ name: "integritas" });
};
</script>

<template>
  <div class="container mx-auto px-1 py-6 max-w-4xl">
    <button
      @click="goBack"
      class="flex items-center gap-2 bg-green-500 hover:bg-00 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 mb-6"
      type="button"
    >
      <i class="fas fa-arrow-left"></i>
      Kembali ke Daftar Zona Integritas
    </button>

    <div v-if="integritas">
      <h1 class="md:text-2xl font-bold text-gray-800 mb-4">
        {{ integritas.title }}
      </h1>
      <img
        :src="integritas.image"
        :alt="integritas.title"
        class="w-full h-auto max-h-[500px] object-cover rounded-lg"
      />

      <p class="text-xs text-gray-600 mt-2 font-medium text-center">
        {{ integritas.description }}
      </p>

      <div class="p-4 md:p-2">
        <div class="flex items-center text-gray-500 text-sm mb-2">
          <i class="far fa-calendar-alt mr-2"></i>
          {{
            new Date(integritas.date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </div>

        <div v-if="integritas.content" class="prose max-w-none text-gray-700">
          <div v-html="integritas.content"></div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-xl text-gray-600">zona integritas tidak ditemukan.</p>
    </div>
  </div>
</template>