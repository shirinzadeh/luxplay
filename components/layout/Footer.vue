<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2">Casino Hotels</h3>
            <p>Find your perfect stay at the best casino hotels.</p>
          </div>
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-gray-300">Privacy Policy</NuxtLink></li>
            </ul>
          </div>
          
        </div>
        <div class="mt-8 text-center">
          <p>&copy; 2024 Casino Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>