<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// Pagination logic
const store = useStore();
const router = useRouter();
const videos = computed(() => store.getters.getVideos);

const currentPage = ref(1);
const perPage = 6; // 6 album per halaman (2 baris x 3 kolom)
const totalPages = computed(() => Math.ceil(videos.value.length / perPage));

const paginatedVidio = computed(() =>
  videos.value.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  )
);

const goToVideoDetail = (id) => {
  router.push(`video_detail/${id}`);
};

function formatDate(dateStr) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateStr).toLocaleDateString("id-ID", options);
}
const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};
</script>

<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl md:text-3xl font-bold mb-8 text-blue-800">
      Video Seputar SMAN 1 Kedungreja
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-8">
      <div
        v-for="videos in paginatedVidio"
        :key="videos.id"
        class="flex flex-col bg-white rounded-lg shadow-sm"
      >
        <div
          class="rounded-t-lg overflow-hidden h-49 flex items-center justify-center"
        >
          <img
            :src="videos.thumbnail"
            class="w-full h-50 object-cover rounded-md"
          />
        </div>
        <div class="p-4 flex flex-col flex-1">
          <h3 class="text-base font-semibold mb-1">{{ videos.title }}</h3>
          <p class="text-gray-500 text-sm mb-1">
            {{ formatDate(videos.date) }}
          </p>

          <button
            class="mt-auto bg-blue-800 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            @click="goToVideoDetail(videos.id)"
          >
            Lihat Video
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
  </div>
</template>