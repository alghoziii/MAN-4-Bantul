<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Judul -->
    <h1 class="text-3xl font-bold text-center">
      Lokasi <span class="text-green-500">Sekolah</span>
    </h1>

    <!-- Map dan Info -->
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <!-- Map -->
      <div class="rounded-md overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8477042196077!2d110.40559777468518!3d-7.8059423922143685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57435c276bcf%3A0x4e7e3c3eab7c3e5c!2sMAN%204%20Bantul!5e0!3m2!1sid!2sid!4v1754489313070!5m2!1sid!2sid"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- Info Sekolah -->
      <div class="space-y-4 ms-4">
        <h2 class="text-xl font-bold">Negeri 4 Bantul Yogyakarta</h2>
        <div class="space-y-2 text-gray-700">
          <p>
            <i class="fa-solid fa-location-dot mr-2 text-green-500"></i>Jl.
            Majapahit, Pringgolayan, Pranti, Kec. Banguntapan, Kabupaten Bantul,
            Daerah Istimewa Yogyakarta 55198
          </p>
          <p>
            <i class="fa-solid fa-phone mr-2 text-green-500"></i>Telp. (0274)
            452188
          </p>
          <p>
            <i class="fa-solid fa-envelope mr-2 text-green-500"></i>Email:
            man4bantul@kemenag.go.id
          </p>
          <p>
            <i class="fa-solid fa-clock mr-2 text-green-500"></i>Senin - Kamis:
            07.00 - 15.30 WIB<br />Jumat: 07.00 - 11.00 WIB
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/xxxxxx"
          target="_blank"
          class="inline-block bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
        >
          Buka di Google Maps
        </a>
      </div>
    </div>

    <!-- Alert Pelayanan -->
    <div
      class="mt-10 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md flex items-start"
    >
      <i class="fa-solid fa-headphones-simple text-2xl mr-4 mt-1"></i>
      <div>
        <h3 class="font-bold">Haloo!</h3>
        <p>
          Kami berkomitmen memberikan pelayanan terbaik untuk Anda, menyediakan
          produk dan layanan terbaik yang Anda butuhkan. Apabila untuk alasan
          tertentu Anda merasa tidak puas dengan pelayanan kami dapat
          menyampaikan kritik dan saran.
        </p>
      </div>
    </div>

    <!-- Form Pengaduan -->
    <div class="mt-10 p-6 border rounded-md shadow-md">
      <h2 class="text-xl font-bold text-center mb-6">
        Form Pengaduan Masyarakat
      </h2>
      <form class="space-y-4 max-w-md mx-auto">
        <div>
          <label class="block font-semibold mb-1">Nama Lengkap</label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            class="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block font-semibold mb-1">E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            class="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block font-semibold mb-1">Isi Aduan</label>
          <textarea
            rows="4"
            placeholder="Tuliskan Isi Aduan...."
            class="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-300 transition"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Vue 3 + script setup (kosong untuk sekarang)
</script>

