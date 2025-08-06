<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const budayaKerja = computed(() => store.getters.getZonaContent.budayaKerja);
</script>

<template>
  <section class="container mx-auto max-w-5xl px-2 py-10">
    <!-- Judul -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
      <span class="text-black">5 Nilai</span>
      <span class="text-green-500"> Budaya Kerja</span>
    </h2>
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Gambar -->
      <div class="flex justify-center ">
        <img
          :src="budayaKerja.image"
          alt="5 Nilai Budaya Kerja"
          class=" w-full"
        />
      </div>
      <!-- Konten -->
      <div class="md:w-3/4">
        <h3 class="font-bold text-lg mb-3">
          {{ budayaKerja.subtitle }}
        </h3>
        <p class="mb-4 text-justify">
          {{ budayaKerja.description }}
        </p>
        <ol class="list-decimal list-inside space-y-2 text-gray-700">
          <li v-for="(item, i) in budayaKerja.values" :key="i">
            <span class="font-semibold">{{ item.title }}</span> :
            {{ item.desc }}
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>