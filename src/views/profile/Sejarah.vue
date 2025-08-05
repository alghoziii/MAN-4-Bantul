<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const deskripsi = computed(() => store.getters.getSejarahDeskripsi);
</script>

<template>
  <div>
    <!-- Gambar Header -->
    <div
      class="relative w-full h-[750px] md:h-[750px] bg-cover bg-center flex items-center justify-center text-white text-center"
      style="background-image: url('/background/bg-sejarah.png')"
    >
      <div class="absolute"></div>
      <div class="relative z-10 px-6">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">
          SEJARAH DAN PERKEMBANGAN MAN 4 BANTUL
        </h1>
        <p class="max-w-3xl mx-auto text-sm md:text-lg">
          Pada Oktober 1969, berdiri Pendidikan Guru Agama Latihan (PGAL) Fakultas Tarbiyah IAIN Sunan Kalijaga Yogyakarta berdasarkan SK Dekan No. 4/D/T/1969 tanggal 14 Januari 1969...
        </p>
      </div>
    </div>

    <!-- Garis Tokoh -->
    <section class="px-6 py-12 text-center">
      <h2 class="text-lg font-semibold mb-6 mt-4">
        Madrasah Aliyah Negeri Lab UIN Yogyakarta adalah buah dari rentetan panjang perjuangan yang diprakarsai oleh :
      </h2>
      <img src="/background/sejarah.png" alt="Tokoh Sejarah" class="mx-auto mt-12" />
    </section>

    <!-- Deskripsi Panjang -->
    <section class="px-6 md:px-16 py-10 max-w-5xl mx-auto text-justify text-gray-800 leading-relaxed">
      <p v-html="deskripsi"></p>
    </section>
  </div>
</template>
