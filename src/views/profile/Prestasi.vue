<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const prestasi = computed(() => store.getters.getPrestasi || []);

const goToDetailPrestasi = (index) => {
  router.push({ name: "prestasi_detail", params: { index } });
};
</script>

<template>
  <div class="container mx-auto px-6 py-10">
    <h1 class="text-2xl md:text-3xl font-bold mb-10 text-green-700">
      PRESTASI <span class="text-black">MADRASAH</span>
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in prestasi"
        :key="item.title + index"
        class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col"
      >
        <img
          :src="item.image"
          alt="Prestasi"
          class="w-full h-52 object-cover rounded-t-lg"
        />
        <div class="flex flex-col flex-1 p-5">
          <h3 class="text-base font-semibold mb-2">{{ item.title }}</h3>

          <button
            @click="goToDetailPrestasi(index)"
            class="mt-auto w-full text-sm font-semibold py-2 px-4 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
          >
            Lihat Prestasi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
