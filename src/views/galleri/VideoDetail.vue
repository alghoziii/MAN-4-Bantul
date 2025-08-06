<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const videoId = parseInt(route.params.id, 10);
const video = computed(() => store.getters.getVideoById(videoId));

// Ambil ID dari URL YouTube
const getYouTubeId = (url) => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:live\/|watch\?v=|embed\/|v\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const goBack = () => {
  router.push({ name: "video" });
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <!-- Tombol kembali -->
    <button
      @click="goBack"
      class="flex items-center gap-2 bg-green-500 hover:bg-yellow-300 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 mb-6"
    >
      <i class="fas fa-arrow-left"></i>
      Kembali ke Daftar Video
    </button>

    <!-- Judul Video -->
    <h1 class="text-3xl font-bold text-black mb-12 text-center">
      {{ video?.title }}
    </h1>

    <!-- Tampilkan semua video (jika array) -->
    <div
      v-if="Array.isArray(video?.videoUrl)"
      class="flex flex-wrap justify-center gap-6"
    >
      <div
        v-for="(url, index) in video.videoUrl"
        :key="index"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <iframe
          v-if="getYouTubeId(url)"
          :src="`https://www.youtube.com/embed/${getYouTubeId(url)}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full aspect-video rounded-md shadow-md"
        ></iframe>
      </div>
    </div>

    <!-- Jika hanya satu video (string) -->
    <div
      v-else-if="typeof video?.videoUrl === 'string'"
      class="flex justify-center"
    >
      <iframe
        v-if="getYouTubeId(video.videoUrl)"
        :src="`https://www.youtube.com/embed/${getYouTubeId(video.videoUrl)}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full max-w-3xl aspect-video rounded-md shadow-md"
      ></iframe>
    </div>

    <!-- Tanggal -->
    <p class="text-center text-gray-600 mt-4">{{ video?.date }}</p>
  </div>
</template>
