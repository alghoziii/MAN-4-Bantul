<script setup>
import Logo from "@/components/Logo.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const ekstrakurikuler = computed(() => store.getters.getEkstrakurikuler);
</script>

<template>
  <div>
    <div
      class="flex flex-col md:flex-row bg-gradient-to-br from-blue-800 via-blue-500 to-blue-500 min-h-[350px] w-full relative overflow-hidden"
    >
      <div
        class="flex-1 flex flex-col justify-center px-14 py-12 md:py-4 md:pl-20"
      >
        <h2
          class="text-white text-2xl md:text-3xl font-medium mb-2 drop-shadow-lg tracking-wide uppercase"
        >
          SMAN 1 KEDUNGREJA
        </h2>
        <h1
          class="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-3 drop-shadow-lg"
        >
          Ekstrakurikuler
        </h1>
        <p
          class="text-white text-lg mb-6 italic relative pl-2 border-l-4 border-yellow-400"
        >
          "Meningkatkan kualitas kegiatan ekstrakulikuler siswa"
        </p>
        <div>
          <button
            class="bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-200 text-lg"
          >
            Pendaftaran : 08123456789 / WAKA Kesiswaan
          </button>
        </div>
      </div>

      <div
        class="absolute right-4 top-1/2 -translate-y-1/2 md:right-16 lg:right-24"
      >
        <Logo />
      </div>
    </div>
    <div
      class="max-w-7xl mx-auto py-10 px-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(item, idx) in ekstrakurikuler"
        :key="idx"
        class="flex flex-col mb-11"
      >
        <div class="flex items-center mb-2">
          <span class="block w-6 h-4 bg-blue-800 mr-2 rounded-sm"></span>
          <h3 class="text-2xl font-bold text-gray-800">{{ item.nama }}</h3>
        </div>
        <div class="mb-1">
          <span class="font-semibold text-gray-700">Jadwal Kegiatan</span>
          <br />
          <span class="text-orange-500 font-bold">{{ item.jadwal }}</span>
        </div>
        <div class="mb-1">
          <span class="font-semibold text-gray-700">Kontak Pengajar</span>
          <br />
          <span class="font-semibold text-gray-800">{{ item.kontak }}</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Telepon/Hp</span>
          <br />
          <span class="text-gray-800">({{ item.telepon }})</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
