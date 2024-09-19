<template>
    <nav>
      <ul class="flex mt-8 flex-col space-y-4">
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