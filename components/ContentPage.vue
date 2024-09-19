<template>

      <main class="container mx-auto px-4 py-12">
        <article class="prose prose-invert prose-lg mx-auto custom-prose">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </article>
      </main>

  </template>
  
  <script setup>

  </script>
  
  <style>
  .prose h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  .prose h1, .prose h2, .prose h3, .prose strong {
    color: white !important;
  }
  
  .prose a {
    color: #60a5fa !important;
  }
  
  .prose a:hover {
    color: #3b82f6 !important;
  }
  
  .custom-prose p {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .custom-prose p:first-child {
    margin-top: 0 !important;
  }
  
  .custom-prose p:last-child {
    margin-bottom: 0 !important;
  }
  
  .custom-prose ul, .custom-prose ol {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .custom-prose li {
    margin-top: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }
  
  .custom-prose li:first-child {
    margin-top: 0 !important;
  }
  
  .custom-prose li:last-child {
    margin-bottom: 0 !important;
  }
  </style>