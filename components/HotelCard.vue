<template>
    <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex max-w-6xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
      <div class="w-1/3 h-64 relative overflow-hidden">
        <NuxtImg
          :src="hotel.image"
          :alt="hotel.name"
          class="w-full h-full"
          sizes="sm:100vw md:50vw lg:400px"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
      <div class="w-1/2 p-6 flex flex-col justify-between relative">
        <div>
          <h2 class="text-2xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-blue-400">{{ hotel.name }}</h2>
          <p class="text-gray-300 mb-4">{{ hotel.description }}</p>
        </div>
      </div>
      <div class="w-1/6 p-6 flex items-center justify-center">
        <NuxtLink 
          :to="hotel.link" 
          class="bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 text-center whitespace-nowrap transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
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