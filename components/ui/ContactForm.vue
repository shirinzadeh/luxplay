<template>
  <form @submit="onSubmit" class="space-y-6 max-w-md mx-auto">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-200">Name</label>
      <input
        id="name"
        v-model="name"
        type="text"
        :class="{ 'border-red-400': nameError }"
        class="p-3 mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
      />
      <span v-if="nameError" class="text-red-400 text-sm">{{ nameError }}</span>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-200">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        :class="{ 'border-red-400': emailError }"
        class="p-3 mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
      />
      <span v-if="emailError" class="text-red-400 text-sm">{{ emailError }}</span>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-200">Message</label>
      <textarea
        id="message"
        v-model="message"
        rows="4"
        :class="{ 'border-red-400': messageError }"
        class="p-3 mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
      ></textarea>
      <span v-if="messageError" class="text-red-400 text-sm">{{ messageError }}</span>
    </div>

    <div>
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800"
      >
        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
      </button>
    </div>
  </form>

  <!-- Toast Message -->
  <div v-if="showToast" class="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
    Message submitted successfully!
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, resetForm } = useForm()

const { value: name, errorMessage: nameError, resetField: resetName } = useField('name', (value) => {
  if (!value) return 'Name is required'
  return true
})

const { value: email, errorMessage: emailError, resetField: resetEmail } = useField('email', (value) => {
  if (!value) return 'Email is required'
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address'
  }
  return true
})

const { value: message, errorMessage: messageError, resetField: resetMessage } = useField('message', (value) => {
  if (!value) return 'Message is required'
  return true
})

const isSubmitting = ref(false)
const showToast = ref(false)

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success toast
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)

    // Reset form and clear validation errors
    resetForm()
    resetName()
    resetEmail()
    resetMessage()
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('An error occurred. Please try again.')
  } finally {
    isSubmitting.value = false
  }
})
</script>