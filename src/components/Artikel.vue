<!-- components/ArtikelTerbaru.vue -->
<template>
  <div class="mx-auto px-10 py-12">
    <div class="space-y-3">
      <div
        v-for="(item, index) in artikel.slice(0, 5)"
        :key="index"
        class="bg-white border rounded-lg px-5 py-2 shadow-sm hover:shadow transition cursor-pointer"
        @click="goToArtikelDetail(item.slug)"
      >
        <div class="font-bold text-gray-900">{{ item.title }}</div>
        <div class="text-sm text-gray-500 mt-1">{{ item.date }}</div>
        <div class="text-gray-700 mt-2">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "ArtikelTerbaru",
  setup() {
    const store = useStore();
    const router = useRouter();
    const artikel = computed(() => store.getters.getArtikel || []);

    const goToArtikelDetail = (slug) => {
      router.push({ name: "artikel_detail", params: { slug } });
    };

    return {
      artikel,
      goToArtikelDetail,
    };
  },
};
</script>
  