<script setup>
defineProps({
  image: String,
  name: String,
  details: String,
  to: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Router-link
    :to="to"
    class="border-2 border-blue-800 rounded-md p-2 flex flex-col items-center gap-4 cursor-pointer hover:shadow-lg transition"
  >
    <!-- Foto -->
    <div
      class="w-51 h-56 border border-gray-300 rounded-md overflow-hidden p-4"
    >
      <img
        :src="image || '/default-placeholder.png'"
        alt="Foto"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Nama -->
    <h3 class="text-sm font-bold text-center text-gray-900">{{ name }}</h3>

    <!-- Detail -->
    <p class="text-xs text-center text-gray-600">{{ details }}</p>
  </Router-link>
</template>