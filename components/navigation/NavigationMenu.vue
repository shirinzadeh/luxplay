<template>
    <nav>
      <ul class="flex mt-8 flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 sm:mt-0">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink :to="item.path" class="hover:text-gray-300">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Contact', path: '/contact' }
  ]
  </script>