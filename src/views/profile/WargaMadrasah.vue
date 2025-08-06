<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const activeTab = ref("guru");
const searchQuery = ref("");

const wargaMadrasah = computed(
  () => store.getters.getProfileContent.wargaMadrasah
);


const currentPageGuru = ref(1);
const currentPageSiswa = ref(1);
const perPage = 12;

// Filter
const filteredGuru = computed(() =>
  wargaMadrasah.value.guru.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
const filteredSiswa = computed(() =>
  wargaMadrasah.value.siswa.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

// Pagination guru
const totalPagesGuru = computed(() =>
  Math.ceil(filteredGuru.value.length / perPage)
);
const paginatedGuru = computed(() =>
  filteredGuru.value.slice(
    (currentPageGuru.value - 1) * perPage,
    currentPageGuru.value * perPage
  )
);

// Pagination siswa
const totalPagesSiswa = computed(() =>
  Math.ceil(filteredSiswa.value.length / perPage)
);
const paginatedSiswa = computed(() =>
  filteredSiswa.value.slice(
    (currentPageSiswa.value - 1) * perPage,
    currentPageSiswa.value * perPage
  )
);

const unduhanList = computed(() => wargaMadrasah.value.unduhan);

// Handler pagination
const setPageGuru = (page) => {
  if (page >= 1 && page <= totalPagesGuru.value) currentPageGuru.value = page;
};

const setPageSiswa = (page) => {
  if (page >= 1 && page <= totalPagesSiswa.value) currentPageSiswa.value = page;
};
</script>



<template>
  <section class="container mx-auto max-w-5xl px-4 py-10">
    <h2 class="text-4xl md:text-4xl font-bold text-center mb-6">
      Data Warga <span class="text-green-500">Madrasah</span>
    </h2>
    <p class="text-center mb-10">
      DAFTAR NAMA GURU, DAFTAR SISWA Dan Daftar Data MAN 4 Bantul
    </p>

    <!-- Tabs -->
    <div class="flex justify-center mb-8 space-x-20">
      <button
        @click="activeTab = 'guru'"
        :class="[
          'px-12 py-4 rounded-t-lg font-semibold border',
          activeTab === 'guru'
            ? 'bg-green-500 text-white'
            : 'bg-white text-green-500 border-green-500',
        ]"
      >
        Data Guru
      </button>
      <button
        @click="activeTab = 'siswa'"
        :class="[
          'px-12 py-4 rounded-t-lg font-semibold border',
          activeTab === 'siswa'
            ? 'bg-green-500 text-white'
            : 'bg-white text-green-500 border-green-500',
        ]"
      >
        Data Siswa
      </button>
      <button
        @click="activeTab = 'unduh'"
        :class="[
          'px-12 py-4 rounded-t-lg font-semibold border',
          activeTab === 'unduh'
            ? 'bg-green-500 text-white'
            : 'bg-white text-green-500 border-green-500',
        ]"
      >
        Unduh Data
      </button>
    </div>

    <!-- Search -->
    <div class="w-full md:w-1/3 relative mx-auto mb-6 flex justify-center">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Cari Nama"
        class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <span class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
        <i class="fas fa-search"></i>
      </span>
    </div>

    <div v-if="activeTab === 'guru'">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-blue-200">
            <th class="px-4 py-2">No</th>
            <th class="px-4 py-2">Nama</th>
            <th class="px-4 py-2">Jenis Kelamin</th>
            <th class="px-4 py-2">Jabatan</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedGuru"
            :key="index"
            class="border-b"
          >
            <td class="px-4 py-2">
              {{ (currentPageGuru - 1) * perPage + index + 1 }}
            </td>
            <td class="px-4 py-2">{{ item.nama }}</td>
            <td class="px-4 py-2">{{ item.gender }}</td>
            <td class="px-4 py-2">{{ item.jabatan }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination Guru -->
      <div class="flex justify-center space-x-2 mt-6" v-if="totalPagesGuru > 1">
        <button
          class="px-3 py-1 rounded border text-gray-700"
          :class="{ 'bg-gray-200': currentPageGuru === 1 }"
          :disabled="currentPageGuru === 1"
          @click="setPageGuru(currentPageGuru - 1)"
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <button
          v-for="page in totalPagesGuru"
          :key="page"
          class="px-3 py-1 rounded border"
          :class="{
            'bg-green-500 text-white': currentPageGuru === page,
            'bg-white text-gray-700': currentPageGuru !== page,
          }"
          @click="setPageGuru(page)"
        >
          {{ page }}
        </button>

        <button
          class="px-3 py-1 rounded border text-gray-700"
          :class="{ 'bg-gray-200': currentPageGuru === totalPagesGuru }"
          :disabled="currentPageGuru === totalPagesGuru"
          @click="setPageGuru(currentPageGuru + 1)"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Table Siswa -->
    <div v-if="activeTab === 'siswa'">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-blue-200">
            <th class="px-4 py-2">No</th>
            <th class="px-4 py-2">Nama</th>
            <th class="px-4 py-2">Jenis Kelamin</th>
            <th class="px-4 py-2">Kelas</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedSiswa"
            :key="index"
            class="border-b"
          >
            <td class="px-4 py-2">
              {{ (currentPageSiswa - 1) * perPage + index + 1 }}
            </td>
            <td class="px-4 py-2">{{ item.nama }}</td>
            <td class="px-4 py-2">{{ item.gender }}</td>
            <td class="px-4 py-2">{{ item.kelas }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination Siswa -->
      <div
        class="flex justify-center space-x-2 mt-6"
        v-if="totalPagesSiswa > 1"
      >
        <button
          class="px-3 py-1 rounded border text-gray-700"
          :class="{ 'bg-gray-200': currentPageSiswa === 1 }"
          :disabled="currentPageSiswa === 1"
          @click="setPageSiswa(currentPageSiswa - 1)"
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <button
          v-for="page in totalPagesSiswa"
          :key="page"
          class="px-3 py-1 rounded border"
          :class="{
            'bg-green-500 text-white': currentPageSiswa === page,
            'bg-white text-gray-700': currentPageSiswa !== page,
          }"
          @click="setPageSiswa(page)"
        >
          {{ page }}
        </button>

        <button
          class="px-3 py-1 rounded border text-gray-700"
          :class="{ 'bg-gray-200': currentPageSiswa === totalPagesSiswa }"
          :disabled="currentPageSiswa === totalPagesSiswa"
          @click="setPageSiswa(currentPageSiswa + 1)"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Table Unduhan -->
    <div v-if="activeTab === 'unduh'" class="mt-8">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-blue-200">
            <th class="px-4 py-2">No</th>
            <th class="px-4 py-2">Nama File / Informasi</th>
            <th class="px-4 py-2">Jumlah Unduh</th>
            <th class="px-4 py-2">Unduh</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in unduhanList"
            :key="index"
            class="border-b"
          >
            <td class="px-4 py-2">{{ index + 1 }}</td>
            <td class="px-4 py-2">{{ item.nama }}</td>
            <td class="px-4 py-2">{{ item.jumlah }} Kali</td>
            <td class="px-4 py-2">
              <a
                :href="item.file"
                download
                class="bg-green-400 hover:bg-yellow-300 text-white font-bold py-1 px-4 rounded"
              >
                Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
