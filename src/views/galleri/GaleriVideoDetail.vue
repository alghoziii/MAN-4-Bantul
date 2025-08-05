<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    // Ambil ID video dari parameter rute
    const videoId = parseInt(route.params.id, 10);

    // Ambil data video dari store berdasarkan ID
    const video = computed(() => store.getters.getVideoById(videoId));

    // Fungsi untuk mengekstrak ID YouTube dari URL
    const getYouTubeId = (url) => {
      const regExp =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    };

    // Ambil ID YouTube dari URL video
    const youTubeVideoId = computed(() =>
      video.value ? getYouTubeId(video.value.videoUrl) : null
    );

    // Navigasi kembali ke halaman galeri video
    const goBack = () => {
      router.push({ name: "galeri_video" });
    };

    return {
      video,
      youTubeVideoId,
      goBack,
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-blue-800 mb-6 text-center">
          Detail Video
        </h1>
        <div v-if="video" class="flex flex-col items-center space-y-4">
          <!-- Player YouTube -->
          <iframe
            v-if="youTubeVideoId"
            :src="`https://www.youtube.com/embed/${youTubeVideoId}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full max-w-xl aspect-video rounded-md shadow-md"
          ></iframe>
          <h2 class="text-2xl font-bold text-gray-900 text-center">
            {{ video.title }}
          </h2>
          <p class="text-gray-600 text-center">{{ video.date }}</p>
        </div>
        <div class="flex justify-center mt-6">
          <button
            @click="goBack"
            class="bg-blue-800 text-white px-4 py-2 rounded"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  </div>
</template>