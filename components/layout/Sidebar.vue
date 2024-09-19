<template>
    <div>
      <div 
        class="fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out"
        :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }"
      >
        <div class="p-6">
          <button @click="$emit('close')" class="absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <NavigationMenu @itemClicked="$emit('close')" />
        </div>
      </div>
      <div 
        v-if="isOpen" 
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="$emit('close')"
      ></div>
    </div>
  </template>
  
  <script setup>
  
  defineProps({
    isOpen: {
      type: Boolean,
      required: true
    }
  })
  
  defineEmits(['close'])
  </script>