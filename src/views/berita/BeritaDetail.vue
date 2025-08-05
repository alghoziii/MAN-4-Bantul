<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const index = Number(route.params.index);
// Ambil detail berita dari store berdasarkan index
const berita = computed(() => store.getters.getBerita[index]);

const goBack = () => {
  router.push({ name: "berita" });
};
</script>

<template>
  <div class="container mx-auto px-1 py-6 max-w-4xl">
    <button
      @click="goBack"
      class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 mb-6"
      type="button"
    >
      <i class="fas fa-arrow-left"></i>
      Kembali ke Daftar Berita
    </button>

    <div v-if="berita">
      <img
        :src="berita.icon"
        :alt="berita.title"
        class="w-full h-74 md:h-90 object-cover rounded-lg"
      />

      <div class="p-4 md:p-2">
        <div class="flex items-center text-gray-500 text-sm mb-2">
          <i class="far fa-calendar-alt mr-2"></i>
          {{
            new Date(berita.date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </div>

        <h1 class="md:text-2xl font-bold text-gray-800">
          {{ berita.title }}
        </h1>
        <p class="text-lg text-gray-600 mb-3 font-medium">
          {{ berita.description }}
        </p>

        <div v-if="berita.content" class="prose max-w-none text-gray-700">
          <div v-html="berita.content"></div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-xl text-gray-600">Berita tidak ditemukan.</p>
    </div>
  </div>
</template>