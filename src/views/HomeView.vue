<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const slides = computed(() => store.getters.getSlides);
const berita = computed(() => store.getters.getBerita || []);
const sambutan = computed(() => store.getters.getSambutan);
const prestasi = computed(() => store.getters.getProfileContent.prestasi);
const layanan = computed(() => store.getters.getLayanan);

// SLIDESHOW
const activeIndex = ref(0);
let slideInterval = null;

function nextSlide() {
  if (!slides.value.length) return;
  activeIndex.value = (activeIndex.value + 1) % slides.value.length;
}
function prevSlide() {
  if (!slides.value.length) return;
  activeIndex.value =
    (activeIndex.value - 1 + slides.value.length) % slides.value.length;
}
function goToSlide(idx) {
  if (!slides.value.length) return;
  activeIndex.value = idx;
}
onMounted(() => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
});
onUnmounted(() => {
  clearInterval(slideInterval);
});

// BERITA CAROUSEL ANIMATED - MODIFIED
const beritaCarouselIndex = ref(0);
const beritaVisibleCount = 3; // Tampilkan 3 card sekaligus
const beritaLength = computed(() => berita.value.length);
const beritaMaxIndex = computed(() =>
  beritaLength.value === 0
    ? 0
    : Math.ceil(beritaLength.value / beritaVisibleCount) - 1
);

function prevBerita() {
  if (beritaCarouselIndex.value > 0) {
    beritaCarouselIndex.value--;
  } else {
    beritaCarouselIndex.value = beritaMaxIndex.value;
  }
}

function nextBerita() {
  if (beritaCarouselIndex.value < beritaMaxIndex.value) {
    beritaCarouselIndex.value++;
  } else {
    beritaCarouselIndex.value = 0;
  }
}

function goToDetailBeritaCarousel(idx) {
  const beritaIndex = beritaCarouselIndex.value * beritaVisibleCount + idx;
  router.push({ name: "berita_detail", params: { index: beritaIndex } });
}
function formatIndoDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// PRESTASI
function goToDetailPrestasi(index) {
  router.push({ name: "prestasi_detail", params: { index } });
}
</script>

<template>
  <!-- SLIDES TERBATAS -->
  <div
    v-if="slides.length"
    class="relative w-full max-w-7xl mx-auto mt-6 rounded-xl overflow-hidden shadow-lg"
  >
    <div class="relative w-full h-[400px] md:h-[440px]">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 transition-opacity duration-700"
        :class="activeIndex === i ? 'opacity-100' : 'opacity-0'"
      >
        <img
          :src="slide.image"
          class="w-full h-full object-cover object-center"
          alt="Slide"
        />
        <div
          v-if="activeIndex === i"
          class="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white text-center"
        >
          <h2 class="text-xl md:text-2xl font-bold mb-2">
            MAN 4 BANTUL Yogyakarta
          </h2>
        </div>
      </div>
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow"
        @click="prevSlide"
        aria-label="Sebelumnya"
      >
        <i class="fa fa-chevron-left text-gray-800"></i>
      </button>
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow"
        @click="nextSlide"
        aria-label="Selanjutnya"
      >
        <i class="fa fa-chevron-right text-gray-800"></i>
      </button>
      <div
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        <span
          v-for="(slide, i) in slides"
          :key="i"
          @click="goToSlide(i)"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="
            activeIndex === i ? 'bg-white' : 'bg-white/50 border border-white'
          "
        ></span>
      </div>
    </div>
  </div>

  <!-- SAMBUTAN -->
  <div class="bg-[#E9F5F3] px-4 md:px-12 py-16 mt-6">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-8"
    >
      <div class="md:w-1/3 flex justify-center relative">
        <div
          class="absolute top-0 left-0 w-20 h-20 bg-green-300 rounded-full -z-10"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-28 h-28 bg-green-100 rounded-full -z-10"
        ></div>
        <img
          src="/background/kepala-sekolah.png"
          alt="Kepala Sekolah"
          class="w-54 h-74 object-cover object-top rounded-lg shadow-md border"
        />
      </div>
      <div class="md:w-2/3">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Sambutan Kepala Sekolah
        </h2>
        <div
          v-html="sambutan.content"
          class="text-gray-700 leading-relaxed"
        ></div>
        <div class="mt-6">
          <p class="text-sm text-gray-600">Kepala Sekolah</p>
          <p class="font-bold text-lg">MUCHAROM, S.Ag, M.Si</p>
        </div>
      </div>
    </div>
  </div>

  <!-- LAYANAN -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div
          v-for="(item, index) in layanan"
          :key="index"
          class="bg-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between relative hover:shadow-xl transition-all duration-300"
        >
          <div class="absolute -top-8 left-1/2 -translate-x-1/2">
            <div
              class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <i :class="[item.icon, 'text-green-500 text-3xl']"></i>
            </div>
          </div>
          <div class="mt-12 text-center flex flex-col flex-1 justify-between">
            <div>
              <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
              <p class="text-sm mb-6">{{ item.description }}</p>
            </div>
            <router-link
              :to="item.link"
              class="text-sm font-semibold hover:text-yellow-300 transition-colors"
            >
              Baca Selengkapnya →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BERITA TERBARU CAROUSEL - MODIFIED -->
  <div class="mx-auto px-4 md:px-10 py-20 bg-gray-50">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl md:text-3xl font-bold text-black">Berita Madrasah</h1>
      <router-link
        to="/berita"
        class="font-semibold text-black hover:text-green-600 text-lg"
      >
        Lihat Semua Berita
      </router-link>
    </div>

    <div class="relative max-w-screen-xl mx-auto">
      <button
        class="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition text-2xl"
        @click="prevBerita"
        aria-label="Sebelumnya"
      >
        <i class="fa fa-chevron-left"></i>
      </button>

      <div class="overflow-hidden px-17">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
            transform: `translateX(-${
              beritaCarouselIndex * (100 / beritaVisibleCount)
            }%)`,
            width: `${Math.ceil(beritaLength / beritaVisibleCount) * 100}%`,
          }"
        >
          <div
            v-for="(group, groupIndex) in Math.ceil(
              beritaLength / beritaVisibleCount
            )"
            :key="groupIndex"
            class="flex w-full px-2 gap-6"
          >
            <div
              v-for="(item, idx) in berita.slice(
                groupIndex * beritaVisibleCount,
                (groupIndex + 1) * beritaVisibleCount
              )"
              :key="item.title + idx"
              class="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col w-full"
              style="min-height: 420px"
            >
              <!-- Image with fixed height -->
              <div class="h-48 overflow-hidden border-b border-gray-200">
                <img
                  :src="item.icon"
                  alt="Thumbnail Berita"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Content with proper spacing -->
              <div class="p-5 flex flex-col flex-1">
                <!-- Date -->
                <div class="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <i class="fa-regular fa-clock"></i>
                  <span>{{ formatIndoDate(item.date) }}</span>
                </div>

                <!-- Title -->
                <h3 class="text-lg font-bold mb-3 text-black line-clamp-2">
                  {{ item.title }}
                </h3>

                <!-- Description -->
                <p class="text-gray-700 mb-4 line-clamp-3 flex-grow">
                  {{ item.description }}
                </p>

                <!-- Read More Button with border -->
                <div class="mt-auto pt-4  border-gray-200">
                  <button
                    class="z font-semibold hover:text-green-500 transition-colors flex items-center justify-end w-full"
                    @click="
                      goToDetailBeritaCarousel(
                        groupIndex * beritaVisibleCount + idx
                      )
                    "
                  >
                    Lihat Selengkapnya
                    <i class="fa fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition text-2xl"
        @click="nextBerita"
        aria-label="Selanjutnya"
        style="box-shadow: 0 2px 10px 0 #0001"
      >
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <!-- PRESTASI MADRASAH -->
  <div class="mx-auto px-4 md:px-10 py-20 bg-gray-50">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl md:text-3xl font-bold text-black">
        Prestasi Madrasah
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(item, index) in prestasi.slice(0, 4)"
        :key="index"
        class="bg-gray-100 rounded-lg hover:shadow-lg transition duration-300 cursor-pointer flex flex-col"
        @click="goToDetailPrestasi(index)"
      >
        <img
          :src="item.image"
          alt="Thumbnail Prestasi"
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="flex flex-col flex-1 justify-between p-6">
          <h3 class="text-base md:text-lg font-bold mb-4 leading-tight">
            {{ item.title }}
          </h3>
          <button
            class="mt-auto border border-green-500 rounded-lg py-2 bg-white hover:bg-green-500 hover:text-white transition-colors"
            @click.stop="goToDetailPrestasi(index)"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center">
      <router-link
        to="/profil/prestasi"
        class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-yellow-300 transition font-semibold inline-flex items-center gap-2"
      >
        Lihat Prestasi Selengkapnya →
      </router-link>
    </div>
  </div>
</template>