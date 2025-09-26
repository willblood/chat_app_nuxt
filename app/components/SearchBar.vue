<template lang="pug">
  .flex.items-center.justify-center.mb-5
    button(class="md:hidden mr-4 focus:outline-none ")
      svg(class="w-6 h-6 text-barca-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
    input(class="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" v-model='searchContent' placeholder="Search...")
</template>

<script setup lang="js">
import { watchDebounced } from '@vueuse/core'
const searchContent = ref('')
const emit = defineEmits(['userSearchResults'])
const errorMessage = ref('')

watchDebounced(searchContent, async (newValue) => {
  emit('userSearchResults', [])   // Clear previous results
  if (newValue.trim() !== '' && newValue.length >= 3) {
    try {
      const res = await $fetch('http://localhost:3000/api/search/users', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${useCookie('authToken').value || ''}`
        },
        body: {
          search: newValue
        }
      })
      emit('userSearchResults', res)
    } catch (e) {
      errorMessage.value = e?.errorMessage || 'Search failed'
      emit('userSearchResults', [])
      console.error('Search error:', errorMessage.value)
    }
  }
}, { debounce: 500 })
</script>