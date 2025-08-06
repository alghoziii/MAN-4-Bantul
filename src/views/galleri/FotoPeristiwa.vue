<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const albums = computed(() => store.getters.getGaleriContent.FotoPeristiwa);

const search = ref("");
const sort = ref(""); // "" | "desc" | "asc"

const filteredAlbums = computed(() => {
  let data = albums.value;
  if (search.value) {
    const keyword = search.value.toLowerCase();
    data = data.filter(
      (album) =>
        album.title.toLowerCase().includes(keyword) ||
        (album.date && album.date.toLowerCase().includes(keyword))
    );
  }
  if (sort.value === "desc") {
    data = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  if (sort.value === "asc") {
    data = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  return data;
});

const goToAlbumDetail = (id) => {
  router.push({ name: "foto_peristiwa_detail", params: { id } });
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
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-8">
      <span class="text-black">Foto</span>
      <span class="text-green-500"> Peristiwa</span>
    </h1>
    <div class="flex flex-col md:flex-row md:justify-between items-center mb-8 gap-4">
      <!-- Search -->
      <div class="relative w-full md:w-1/3">
        <input
          v-model="search"
          type="text"
          placeholder="Cari Seputar Foto Peristiwa"
          class="w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <i class="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
      </div>
      <!-- Sort -->
      <div class="w-full md:w-auto flex justify-end">
        <select
          v-model="sort"
          class="rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Urutkan Dari</option>
          <option value="desc">Terbaru</option>
          <option value="asc">Terlama</option>
        </select>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
    >
      <div
        v-for="album in filteredAlbums"
        :key="album.id"
        class="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition"
      >
        <!-- Foto dengan aspect ratio 16:9 dan sudut bulat -->
        <div class="rounded-t-xl overflow-hidden aspect-[16/9] w-full flex items-center justify-center bg-gray-100">
          <img
            :src="album.photos[0]"
            alt="Album Thumbnail"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="p-4 flex flex-col flex-1">
          <h3 class="text-base font-semibold mb-1">{{ album.title }}</h3>
          <p class="text-gray-400 text-sm mb-1">
            {{ formatDate(album.date) }}
          </p>
          <p class="text-gray-700 text-sm mb-3">
            Jumlah : <span class="font-bold">{{ album.photos.length }}</span> Foto
          </p>
          <button
            class="w-full bg-green-400 text-white py-2 rounded-lg font-semibold hover:bg-green-500 transition mt-auto"
            @click="goToAlbumDetail(album.id)"
          >
            Lihat Foto
          </button>
        </div>
      </div>
      <div
        v-if="filteredAlbums.length === 0"
        class="col-span-full text-center text-gray-400 font-semibold py-8"
      >
        Tidak ada data ditemukan.
      </div>
    </div>
  </div>
</template>