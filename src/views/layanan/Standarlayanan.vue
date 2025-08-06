<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const maklumat = computed(() => store.getters.getLayananContent.maklumat);

const standards = [
  { icon: "fa-shield-alt", text: "Transparan" },
  { icon: "fa-archive", text: "Akuntabel" },
  { icon: "fa-clock", text: "Tepat Waktu" },
  { icon: "fa-users", text: "Ramah Pelayanan" }
];
</script>

<template>
  <section class="container mx-auto max-w-3xl px-4 py-10">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
      <span class="text-black">Maklumat</span>
      <span class="text-green-500"> Standar Layanan</span>
    </h2>
    <div class="flex justify-center mb-7">
      <div class="bg-gray-100 rounded-md shadow-md p-7 max-w-xl w-full text-center">
        <div class="mb-4 flex justify-center">
          <i class="fas fa-quote-left text-green-500 text-3xl mr-2"></i>
        </div>
        <p class="text-base mb-5 text-gray-700 font-medium leading-relaxed">
          {{ maklumat.quote }}
        </p>
        <div class="mb-2 text-gray-700">{{ maklumat.author }}</div>
        <div class="font-bold">{{ maklumat.signature }}</div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-6 mb-10">
      <div
        v-for="(item, i) in standards"
        :key="i"
        class="flex items-center gap-1 text-base font-semibold"
      >
        <i :class="['fas', item.icon, 'text-green-500', 'w-6', 'h-3']"></i>
        <span class="text-green-500">{{ item.text }}</span>
      </div>
    </div>
    <!-- Feedback Section -->
    <div class="flex justify-center">
      <div class="bg-gray-100 rounded-md shadow p-3 flex items-center gap-3 max-w-md w-full">
        <span class="text-gray-700 font-medium">Apakah halaman ini membantu?</span>
        <button class="ml-2 flex items-center justify-center rounded-full border border-green-500 text-green-500 hover:bg-green-100 w-7 h-7 focus:outline-none">
          <i class="fas fa-check"></i>
        </button>
        <button class="ml-2 flex items-center justify-center rounded-full border border-red-400 text-red-400 hover:bg-red-100 w-7 h-7 focus:outline-none">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </section>
</template>