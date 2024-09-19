<template>
    <header class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold">Casino Hotels</NuxtLink>
        <nav>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-gray-300">Privacy</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>