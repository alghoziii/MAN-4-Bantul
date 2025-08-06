<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const searchQuery = ref("");
const sortOrder = ref(""); // default: no sort

const currentPage = ref(1);
const perPage = 6;

// Semua prestasi dari store
const prestasiAll = computed(() => store.getters.getProfileContent.prestasi);

// Filter + Sort (lebih fleksibel dan konsisten)
const filteredPrestasi = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();

  let filtered = prestasiAll.value.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
  );

  filtered = filtered.slice(); // defensif, agar tidak merubah array asli

  if (sortOrder.value === "desc") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); // Terbaru
  } else if (sortOrder.value === "asc") {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date)); // Terlama
  }

  return filtered;
});

// Pagination
const totalPages = computed(() =>
  Math.ceil(filteredPrestasi.value.length / perPage)
);

const paginatedPrestasi = computed(() =>
  filteredPrestasi.value.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  )
);

// Navigasi detail (index dari hasil filter pada halaman ke berapa)
const goToDetailPrestasi = (index) => {
  const actualIndex = (currentPage.value - 1) * perPage + index;
  router.push({ name: "prestasi_detail", params: { index: actualIndex } });
};

const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-2xl md:text-3xl font-bold mb-6 text-center">
      <span class="text-black">PRESTASI </span>
      <span class="text-green-500">MADRASAH</span>
    </h1>

    <!-- Header & Controls -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      <div class="w-full md:w-1/3 relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari Seputar Prestasi"
          class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <span class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
          <i class="fas fa-search"></i>
        </span>
      </div>

      <div class="w-full md:w-auto flex justify-end">
        <select
          v-model="sortOrder"
          class="rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Urutkan Dari</option>
          <option value="desc">Terbaru</option>
          <option value="asc">Terlama</option>
        </select>
      </div>
    </div>

    <!-- Grid Prestasi -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in paginatedPrestasi"
        :key="item.title + index"
        class="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
      >
        <img
          :src="item.image"
          alt="Prestasi"
          class="w-full h-60 object-cover mb-3"
        />
        <div class="p-4 flex flex-col justify-between flex-1">
          <h3 class="text-sm font-medium text-gray-800 mb-4 leading-snug">
            {{ item.title }}
          </h3>
          <button
            @click="goToDetailPrestasi(index)"
            class="mt-auto text-sm font-semibold py-2 px-4 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition"
          >
            Lihat Prestasi
          </button>
        </div>
      </div>
    </div>

    <!-- Kosong -->
    <div
      v-if="filteredPrestasi.length === 0"
      class="text-center py-16 text-gray-500 text-sm"
    >
      Tidak ditemukan hasil untuk: <strong>{{ searchQuery }}</strong>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center space-x-2 mt-6" v-if="totalPages > 1">
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
          'bg-green-500 text-white': currentPage === page,
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