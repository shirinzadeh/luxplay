<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p class="mb-8 text-center">We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.</p>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-center">Send us a message</h2>
          <ContactForm />
        </div>

    </div>
</template>

<script setup>
import ContactForm from '~/components/ContactForm.vue'

useHead({
  title: 'Contact Us - Casino Hotels',
  meta: [
    { name: 'description', content: 'Get in touch with Casino Hotels. We\'re here to answer any questions you may have about our services.' }
  ]
})
</script>