<template>
  <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row max-w-6xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
    <div class="w-full sm:w-1/3 h-48 sm:h-64 relative overflow-hidden">
      <NuxtImg
        :src="hotel.image"
        :alt="hotel.name"
        class="w-full h-full object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
    </div>
    <div class="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-between relative">
      <div>
        <h2 class="text-xl sm:text-2xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-blue-400">{{ hotel.name }}</h2>
        <p class="text-sm sm:text-base text-gray-300 mb-4">{{ hotel.description }}</p>
      </div>
    </div>
    <div class="w-full sm:w-1/6 p-4 sm:p-6 flex items-center justify-center">
      <NuxtLink 
        :to="`/redirect?url=${encodeURIComponent(hotel.link)}`"
        target="_blank"
        class="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-center whitespace-nowrap transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
      >
        Visit Hotel
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hotel: {
    type: Object,
    required: true
  }
})
</script>