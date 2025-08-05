<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import IdCard from "@/components/IdCard.vue";

const route = useRoute();
const store = useStore();

const id = route.params.id;
const siswaData = store.getters["getSiswaAlumniById"](id);
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-3xl font-bold text-blue-800 mb-6">Profil Alumni</h1>

    <!-- Kartu Identitas Alumni -->
    <IdCard v-if="siswaData" :card="siswaData" type="alumni" />

    <!-- Tombol Kembali -->
    <div class="mt-6 text-center">
      <router-link
        :to="{ name: 'direktori_alumni' }"
        class="px-4 py-2 bg-blue-800 text-white rounded"
      >
        Kembali
      </router-link>
    </div>
  </div>
</template>
