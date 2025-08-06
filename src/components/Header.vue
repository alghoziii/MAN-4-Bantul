<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import DropdownMenu from "@/components/DropdownMenu.vue";

const store = useStore();
const menus = computed(() => store.getters.getNavbarMenus);
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="bg-green-500 text-white shadow-md w-full z-40">
    <div class="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
      <!-- Kiri: Logo + Nama Sekolah -->
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12">
          <img
            src="/logo-man.png"
            alt="Logo MAN 4 Bantul"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="flex flex-col leading-tight">
          <h1 class="text-xl font-bold uppercase tracking-wide">
            Madrasah Aliyah
          </h1>
          <p class="text-xs opacity-90">Negeri 4 Bantul Yogyakarta</p>
        </div>
      </div>

      <!-- Tengah: Menu Desktop -->
      <nav class="hidden md:flex items-center space-x-6">
        <router-link
          to="/"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Beranda
        </router-link>

        <DropdownMenu
          label="Profil"
          :items="menus.profileMenu"
          path="/profil"
        />
        <router-link
          to="/berita"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Berita
        </router-link>
        <DropdownMenu
          label="Zona Integritas"
          :items="menus.zonaMenu"
          path="/zona"
        />
        <DropdownMenu
          label="Layanan"
          :items="menus.layananMenu"
          path="/layanan"
        />
        <DropdownMenu
          label="Galeri"
          :items="menus.galeriMenu"
          path="/galeri"
        />
      </nav>

      <!-- Kanan: Tombol Menu Mobile -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-2xl focus:outline-none"
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>

    <!-- Menu Mobile -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-green-500 w-full px-6 py-3"
    >
      <nav class="flex flex-col space-y-2">
        <router-link
          to="/"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Beranda
        </router-link>

        <DropdownMenu
          label="Profil"
          :items="menus.profileMenu"
          path="/profil"
        />
        <router-link
          to="/berita"
          class="hover:text-yellow-300 transition-colors duration-200"
        >
          Berita
        </router-link>
        <DropdownMenu
          label="Zona Integritas"
          :items="menus.zonaMenu"
          path="/zona-integritas"
        />
        <DropdownMenu
          label="Layanan"
          :items="menus.layananMenu"
          path="/layanan"
        />
        <DropdownMenu
          label="Galeri"
          :items="menus.galeriMenu"
          path="/galeri"
        />
      </nav>
    </div>
  </header>
</template>
