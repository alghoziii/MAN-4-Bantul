<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const searchQuery = ref("");
const sortOrder = ref("terbaru");

const zonaIntegritas = computed(
  () => store.getters.getZonaContent.zonaIntegritas || []
);

// Filter & Sort
const filteredSortedZona = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();

  let filtered = zonaIntegritas.value.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
  );

  // Sort by date
  filtered.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder.value === "terbaru" ? dateB - dateA : dateA - dateB;
  });

  return filtered;
});

const goToDetail = (index) => {
  router.push({ name: "integritas_detail", params: { index } });
};
</script>
<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-2xl md:text-3xl font-bold mb-6 text-center">
      <span class="text-black">Aktivitas </span>
      <span class="text-green-500">Zona Integritas</span>
    </h1>

    <!-- 🔍 Search & Sort -->
    <div
      class="flex flex-col md:flex-row justify-between items-center gap-4 mb-6"
    >
      <div class="w-full md:w-1/3 relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari Seputar Berita"
          class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
          <i class="fas fa-search"></i>
        </span>
      </div>

      <div class="w-full md:w-auto">
        <select
          v-model="sortOrder"
          class="border border-gray-300 rounded-full py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="terbaru">Urutkan dari Terbaru</option>
          <option value="terlama">Urutkan dari Terlama</option>
        </select>
      </div>
    </div>

    <!-- Grid Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div
        v-for="(item, idx) in filteredSortedZona"
        :key="item.title + idx"
        class="bg-white rounded-lg shadow p-4 flex flex-col"
      >
        <img
          :src="item.image"
          alt="Zona Integritas"
          class="w-full h-60 object-cover rounded mb-3"
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
            Lihat Selengkapnya 
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="filteredSortedZona.length === 0"
      class="text-center py-16 text-gray-500 text-sm"
    >
      Tidak ditemukan hasil untuk: <strong>{{ searchQuery }}</strong>
    </div>
  </div>
</template>
