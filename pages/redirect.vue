<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">Redirecting...</h1>
        <p class="text-lg text-gray-300 mb-8">You are being redirected to an external website.</p>
        <a :href="url" target="_blank" rel="noopener noreferrer" class="bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-700">
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const url = ref('')
  
  onMounted(() => {
    url.value = route.query.url as string
    if (url.value) {
      window.location.href = url.value
    }
  })
  </script>