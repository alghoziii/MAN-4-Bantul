<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  reverse: Boolean,
});
</script>

<template>
  <div class="hidden md:block mb-24">
    <!-- Not reversed: Image left, text right -->
    <div v-if="!reverse" class="flex items-center">
      <div class="w-1/2 pr-8">
        <img
          :src="image"
          alt=" Image"
          class="w-full h-auto object-cover rounded-lg shadow"
        />
      </div>
      <div class="w-1/2 pl-8">
        <h3 class="text-3xl font-bold text-blue-800 mb-4">{{ title }}</h3>
        <div v-html="description" class="text-gray-800 text-lg"></div>
      </div>
    </div>

    <!-- Reversed: Text left, image right -->
    <div v-else class="flex items-center">
      <div class="w-1/2 pr-8 text-right">
        <h3 class="text-3xl font-bold text-blue-800 mb-4">{{ title }}</h3>
        <div v-html="description" class="text-gray-800 text-lg"></div>
      </div>
      <div class="w-1/2 pl-8">
        <img
          :src="image"
          alt=" Image"
          class="w-full h-auto object-cover rounded-lg shadow"
        />
      </div>
    </div>
  </div>

  <!-- Mobile layout (keep as is since it's working well) -->
  <div class="md:hidden flex flex-col mb-16">
    <h3 class="text-2xl font-bold text-blue-800 mb-3">{{ title }}</h3>
    <img
      :src="image"
      alt=" Image"
      class="w-full h-auto object-cover rounded-lg shadow mb-4"
    />
    <div v-html="description" class="text-gray-800 text-base"></div>
  </div>
</template>
