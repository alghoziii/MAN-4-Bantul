<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import IdCard from "@/components/IdCard.vue";

const route = useRoute();
const store = useStore();

// Ambil id dari route params
const id = route.params.id;
const siswaData = store.getters["getSiswaById"](id);
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-3xl font-bold text-blue-800 mb-6">Profil Siswa</h1>

    <!-- Kartu Identitas -->
    <IdCard :card="siswaData" type="siswa" />

    <!-- Tombol Kembali -->
    <div class="mt-6 text-center">
      <router-link
        :to="{ name: 'direktori_siswa' }"
        class="px-4 py-2 bg-blue-800 text-white rounded"
      >
        Kembali
      </router-link>
    </div>
  </div>
</template>