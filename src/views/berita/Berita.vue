<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const beritaAll = computed(() => store.getters.getBerita || []);
const searchQuery = ref("");
const sortOrder = ref(""); // "" (default), "desc", "asc"
const categoryFilter = ref(""); // <-- tambahan filter kategori

const currentPage = ref(1);
const perPage = 6;

// Daftar kategori
const categories = [
  { label: "Semua Berita", value: "" },
  { label: "Berita Media Nasional", value: "media" },
  { label: "Berita Kemenag", value: "kemenag" },
  { label: "Berita Daerah", value: "daerah" },
  { label: "Berita Dunia Islam", value: "islam" },
];

// Filtering + Sorting + Kategori
const filteredSortedBerita = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();

  let filtered = beritaAll.value.filter((item) => {
    const matchQuery =
      item.title?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query);

    const matchCategory =
      !categoryFilter.value || item.category === categoryFilter.value;

    return matchQuery && matchCategory;
  });

  filtered = filtered.slice(); // defensive copy

  if (sortOrder.value === "desc") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); // Terbaru
  } else if (sortOrder.value === "asc") {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date)); // Terlama
  }

  return filtered;
});

// Pagination logic
const totalPages = computed(() =>
  Math.ceil(filteredSortedBerita.value.length / perPage)
);

const paginatedBerita = computed(() =>
  filteredSortedBerita.value.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  )
);

// Navigate
const goToDetail = (index) => {
  const beritaIndex = (currentPage.value - 1) * perPage + index;
  router.push({ name: "berita_detail", params: { index: beritaIndex } });
};

const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-2xl md:text-3xl font-bold mb-6 text-center">
      <span class="text-black">BERITA SEPUTAR </span>
      <span class="text-green-500">MADRASAH</span>
    </h1>

    <!-- Search + Category + Sort -->
    <div
      class="flex flex-col md:flex-row justify-between items-center gap-4 mb-6"
    >
      <!-- Search -->
      <div class="w-full md:w-1/3 relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari Seputar Berita"
          class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <span class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
          <i class="fas fa-search"></i>
        </span>
      </div>

      <!-- Category Filter -->
      <div class="w-full md:w-auto">
        <select
          v-model="categoryFilter"
          class="border border-gray-300 rounded-full py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option v-for="cat in categories" :key="cat.value" :value="cat.value">
            {{ cat.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Grid Berita -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div
        v-for="(item, idx) in paginatedBerita"
        :key="item.title + idx"
        class="bg-white rounded-lg shadow p-4 flex flex-col"
      >
        <img
          :src="item.icon"
          alt="Berita Icon"
          class="w-full aspect-[16/9] object-cover rounded mb-3"
        />
        <div class="flex-1 flex flex-col">
          <p class="text-xs text-gray-400 mb-3">
            {{
              new Date(item.date).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
          <h3 class="text-base font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-600 flex-1 mb-2">
            {{ item.description }}
          </p>
          <button
            @click="goToDetail(idx)"
            class="mt-auto text-sm font-semibold py-2 px-4 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition"
          >
            Lihat Berita
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="filteredSortedBerita.length === 0"
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
