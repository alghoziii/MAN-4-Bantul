<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import CardFoto from "@/components/CardFoto.vue";

const store = useStore();
const currentPage = ref(1);
const itemsPerPage = 8;
const searchQuery = ref("");
const selectedCategory = ref("IPA");

const direktoriSiswa = computed(() => store.getters.getDirektoriSiswa);

const filtered = computed(() =>
  direktoriSiswa.value.filter(
    (item) =>
      item.category === selectedCategory.value &&
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const totalPages = computed(() =>
  Math.ceil(filtered.value.length / itemsPerPage)
);

const paginatedDirektori = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filtered.value.slice(start, start + itemsPerPage);
});

const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++; };

const paginationRange = computed(() => {
  const pages = [];
  for (let i = 1; i <= totalPages.value; i++) pages.push(i);
  return pages;
});
</script>

<template>
  <div class="container mx-auto px-6 py-10">
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-4">
        <h2 class="text-3xl font-bold text-blue-800 m-0">
          Direktori Siswa
        </h2>
        <select
          class="border border-gray-300 rounded px-4 py-2"
          v-model="selectedCategory"
          style="min-width: 120px"
        >
          <option value="IPA">IPA</option>
          <option value="IPS">IPS</option>
        </select>
      </div>
      <div class="flex items-center border border-gray-300 rounded">
        <input
          type="text"
          :placeholder="'Cari Siswa ' + selectedCategory"
          class="px-4 py-2 focus:outline-none"
          v-model="searchQuery"
        />
        <button class="px-4 text-black">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CardFoto
        v-for="(item, index) in paginatedDirektori"
        :key="item.id || index"
        :image="item.image"
        :name="item.name"
        :details="item.details"
        :to="{ name: 'direktori_siswa_detail', params: { id: item.id } }"
      />
    </div>

    <div class="flex flex-wrap justify-center mt-6 gap-2">
      <button
        class="px-3 py-2 bg-blue-800 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        v-for="page in paginationRange"
        :key="page"
        class="px-3 py-2 border border-gray-300 rounded"
        :class="currentPage === page ? 'bg-blue-800 text-white' : ''"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
      <button
        class="px-3 py-2 bg-blue-800 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>