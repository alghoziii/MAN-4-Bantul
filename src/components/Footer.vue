<template>
  <footer class="bg-green-500 text-white py-10 mt-12">
    <div class="max-w-screen-xl mx-auto px-1 py-4 flex flex-wrap justify-between gap-4">
      <!-- Bagian kiri: Logo + Info Sekolah -->
      <div class="flex flex-col md:flex-row md:items-center md:space-x-1 flex-1 min-w-[250px]">
        <!-- Logo -->
        <img
          src="/logo-man.png"
          alt="Logo MAN 4 Bantul"
          class="w-40 h-40 mx-auto md:mx-0"
        />

        <!-- Teks Sekolah -->
        <div class="mt-4 md:mt-0 text-center md:text-left">
          <h2 class="text-xl font-bold uppercase">Madrasah Aliyah Negeri 4 Bantul</h2>
          <h2 class="text-xl font-bold uppercase">Yogyakarta</h2>
          <p class="text-sm mt-2">
            Jl. Majapahit, Pringgolayan, Pranti, Kec. Banguntapan, Kabupaten Bantul,
            Daerah Istimewa Yogyakarta | Telp (0274) 452168
          </p>

          <!-- Tombol Lokasi -->
          <a 
            href="https://maps.app.goo.gl/xxxxxx" 
            target="_blank"
            class="inline-flex items-center mt-4 bg-white text-green-700 font-semibold px-4 py-2 rounded-md shadow-md hover:bg-green-100 transition"
          >
            Lokasi Sekolah <i class="fa-solid fa-location-dot ml-2"> </i>
          </a>
        </div>
      </div>

      <!-- Bagian kanan: Menu Link -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1 min-w-[250px]">
        <!-- Profil Sekolah -->
        <div>
          <h3 class="text-xl font-bold mb-4">Profil Sekolah</h3>
          <ul class="space-y-2">
            <li><router-link to="/profil/sejarah" class="hover:text-yellow-300">Sejarah</router-link></li>
            <li><router-link to="/profil/latar-belakang" class="hover:text-yellow-300">Latar Belakang</router-link></li>
            <li><router-link to="/profil/visi-misi" class="hover:text-yellow-300">Visi & Misi</router-link></li>
            <li><router-link to="/profil/struktur-organisasi" class="hover:text-yellow-300">Struktur Organisasi</router-link></li>
          </ul>
        </div>

        <!-- Berita & Informasi -->
        <div>
          <h3 class="text-xl font-bold mb-4">Berita & Informasi</h3>
          <ul class="space-y-2">
            <li><router-link to="/berita/islam" class="hover:text-yellow-300">Berita Dunia Islam</router-link></li>
            <li><router-link to="/berita/nasional" class="hover:text-yellow-300">Berita Nasional</router-link></li>
            <li><router-link to="/berita/daerah" class="hover:text-yellow-300">Berita Daerah</router-link></li>
            <li><router-link to="/zona-integritas" class="hover:text-yellow-300">Aktivitas Zona Integritas</router-link></li>
          </ul>
        </div>

        <!-- Hubungi Kami -->
        <div>
          <h3 class="text-xl font-bold mb-4">Hubungi Kami</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-yellow-300 text-xl"><i class="fab fa-whatsapp"></i></a>
            <a href="#" class="text-white hover:text-yellow-300 text-xl"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-white hover:text-yellow-300 text-xl"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white hover:text-yellow-300 text-xl"><i class="fab fa-telegram-plane"></i></a>
            <a href="#" class="text-white hover:text-yellow-300 text-xl"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="w-full border-t border-white mt-14 pt-4 text-center text-sm">
        © Copyright MAN 4 Bantul Yogyakarta
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
