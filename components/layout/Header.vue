<template>
  <header class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">Gecorooms</NuxtLink>
      <NavigationMenu class="hidden sm:block" />
      <HamburgerIcon @click="toggleSidebar" class="sm:hidden" />
    </div>
  </header>
  <Sidebar :isOpen="isSidebarOpen" @close="toggleSidebar" class="sm:hidden"/>
</template>

<script setup>

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>