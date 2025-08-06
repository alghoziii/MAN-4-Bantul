<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const albumId = parseInt(route.params.id, 10);
const album = computed(() => store.getters.getFotoPeristiwaById(albumId));

// Pagination foto
const currentPage = ref(1);
const perPage = 8;
const totalPages = computed(() =>
  album.value ? Math.ceil(album.value.photos.length / perPage) : 1
);

const paginatedPhotos = computed(() =>
  album.value
    ? album.value.photos.slice(
        (currentPage.value - 1) * perPage,
        currentPage.value * perPage
      )
    : []
);

const goBack = () => {
  router.push({ name: "foto_peristiwa" });
};
const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};

// Untuk zoom modal
const zoomImg = ref(null);
const showZoom = ref(false);
const openZoom = (src) => {
  zoomImg.value = src;
  showZoom.value = true;
};
const closeZoom = () => {
  showZoom.value = false;
  zoomImg.value = null;
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-3xl font-bold text-blue-800 mb-6">
      {{ album?.title }}
    </h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      <img
        v-for="photo in paginatedPhotos"
        :key="photo"
        :src="photo"
        alt="Photo"
        class="object-cover h-48 w-full rounded-md shadow-md cursor-zoom-in"
        @click="openZoom(photo)"
      />
    </div>
    <div class="flex justify-center space-x-2 mb-6">
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
          'bg-blue-800 text-white': currentPage === page,
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
    <div class="flex justify-center">
      <button @click="goBack" class="bg-blue-800 text-white px-4 py-2 rounded">
        Kembali
      </button>
    </div>
    <!-- Modal Zoom -->
    <div
      v-if="showZoom"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      @click.self="closeZoom"
    >
      <img
        :src="zoomImg"
        class="max-w-4xl max-h-[80vh] rounded shadow-lg border-4 border-white"
      />
      <button
        class="absolute top-6 right-6 bg-white text-black rounded-full p-2 text-xl font-bold"
        @click="closeZoom"
      >
      <i class="fa-solid fa-x"></i>
      </button>
    </div>
  </div>
</template>