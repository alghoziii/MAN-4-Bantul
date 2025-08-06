<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const content = computed(() => store.getters.getProfileContent.visiMisi);
</script>

<template>
  <section class="container mx-auto max-w-6xl px-4 py-10">
    <!-- Judul -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
      <span class="text-black">Visi </span>
      <span class="text-green-500">& Misi</span>
    </h2>

    <!-- Visi -->
    <div
      class="flex flex-col md:flex-row items-start md:items-start gap-8 md:gap-12 mb-14"
    >
      <!-- Text -->
      <div class="md:w-2/3">
        <div class="flex items-start mb-4">
          <span class="text-green-500 text-4xl font-bold mr-2">“</span>
          <h3 class="text-2xl font-bold text-black">{{ content.title1 }}</h3>
        </div>
        <div
          class="text-gray-700 text-base leading-relaxed prose prose-sm md:prose-base max-w-none"
          v-html="content.visi"
        ></div>
      </div>

      <!-- Gambar -->
      <div class="md:w-1/2 self-center">
        <div class="rounded-lg shadow-md overflow-hidden aspect-[4/3]">
          <img
            src="/visi.png"
            alt="Visi Madrasah"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-8"
    >
      <div class="md:w-1/2 self-center">
        <div class="rounded-lg shadow-lg overflow-hidden aspect-[5/3]">
          <img
            src="/misi.png"
            alt="Misi Madrasah"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="md:w-1/2">
        <div class="flex items-start mb-4">
          <span class="text-green-500 text-4xl font-bold mr-2">“</span>
          <h3 class="text-2xl md:text-3xl font-bold text-black">
            {{ content.title2 }}
          </h3>
        </div>

        <ul class="space-y-4">
          <li
            v-for="(item, index) in content.misi"
            :key="index"
            class="flex items-start gap-3 text-base md:text-lg text-gray-700"
          >
            <span class="text-green-500 mt-1">
              <i class="fas fa-check-circle"></i>
            </span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
