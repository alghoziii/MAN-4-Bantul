<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const berita = computed(() => store.getters.getBerita);

// Pagination state
const currentPage = ref(1);
const perPage = 6; // tampilkan 6 berita per halaman

const totalPages = computed(() => Math.ceil(berita.value.length / perPage));

const paginatedBerita = computed(() =>
  berita.value.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  )
);

const goToDetail = (index) => {
  // Cari index asli di berita (karena berita di halaman bisa slice)
  const beritaIndex = (currentPage.value - 1) * perPage + index;
  router.push({ name: "berita_detail", params: { index: beritaIndex } });
};

const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-2xl md:text-3xl font-bold mb-6 text-blue-800">
      Berita Seputar SMAN 1 Kedungreja
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div
        v-for="(item, idx) in paginatedBerita"
        :key="item.title + idx"
        class="bg-white rounded-lg shadow p-4 flex flex-col"
      >
        <img
          :src="item.icon"
          alt="Berita Icon"
          class="w-full h-60 object-cover rounded mb-3"
        />
        <div class="flex-1 flex flex-col">
          <h3 class="text-base font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-600 flex-1 mb-2">
            {{ item.description }}
          </p>
          <p class="text-xs text-gray-400 mb-3">{{ item.date }}</p>
          <button
            @click="goToDetail(idx)"
            class="mt-auto bg-blue-800 text-white text-sm py-2 w-full rounded hover:bg-blue-700 transition"
          >
            Lihat Berita
          </button>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <div class="flex justify-center space-x-2">
      <button
        class="px-3 py-1 rounded border text-gray-700"
        :class="{ 'bg-gray-200': currentPage === 1 }"
        :disabled="currentPage === 1"
        @click="setPage(currentPage - 1)"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        class="px-3 py-1 rounded border"
        :class="{
          'bg-blue-600 text-white': currentPage === page,
          'bg-white text-gray-700': currentPage !== page,
        }"
        @click="setPage(page)"
      >
        {{ page }}
      </button>
      <button
        class="px-3 py-1 rounded border text-gray-700"
        :class="{ 'bg-gray-200': currentPage === totalPages }"
        :disabled="currentPage === totalPages"
        @click="setPage(currentPage + 1)"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>