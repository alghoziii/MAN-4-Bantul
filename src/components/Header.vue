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
  <header class="bg-green-500 text-white shadow-md top-0 left-0 w-full z-40">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo + Nama -->
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12">
            <img
              src="/logo-man.png"
              alt="Logo Man 4 Bantul"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col">
            <h1 class="text-xl font-bold uppercase tracking-wider">
              Madrasah Aliyah
            </h1>
            <div class="text-xs opacity-80">Negeri 4 Bantul Yogyakarta</div>
          </div>
        </div>

       <!-- Menu Desktop -->
        <nav class="hidden md:flex items-center space-x-6 relative">
          <router-link
            to="/"
            class="hover:text-yellow-300 transition-colors duration-200"
          >
            Beranda
          </router-link>

          <DropdownMenu label="Profil" :items="menus.profileMenu" path="/profil" />
          <router-link
            to="/berita"
            class="hover:text-yellow-300 transition-colors duration-200"
          >
            Berita
          </router-link>
          <DropdownMenu label="Zona Integritas" :items="menus.zonaMenu" path="/zona-integritas" />
          <DropdownMenu label="Layanan" :items="menus.layananMenu" path="/layanan" />
          <DropdownMenu label="Galeri" :items="menus.galeriMenu" path="/galeri" />
        </nav>

        <!-- Menu Mobile Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-2xl focus:outline-none"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Menu Mobile Dropdown -->
      <div
        v-if="mobileMenuOpen"
        class="absolute left-0 right-0 mt-2 w-full bg-green-500 z-50 md:hidden"
      >
        <nav class="flex flex-col space-y-1 px-4 py-3">
          <router-link
            to="/"
            class="hover:text-yellow-300 transition-colors duration-200"
          >
            Beranda
          </router-link>

          <DropdownMenu label="Profil" :items="menus.profileMenu" path="/profil" />
          <router-link
            to="/berita"
            class="hover:text-yellow-300 transition-colors duration-200"
          >
            Berita
          </router-link>
          <DropdownMenu label="Zona Integritas" :items="menus.zonaMenu" path="/zona-integritas" />
          <DropdownMenu label="Layanan" :items="menus.layananMenu" path="/layanan" />
          <DropdownMenu label="Galeri" :items="menus.galeriMenu" path="/galeri" />
        </nav>
      </div>
    </div>
  </header>
</template>