<template lang="pug">
  .flex.items-center.justify-center.mb-5
    button(class="md:hidden mr-4 focus:outline-none ")
      svg(class="w-6 h-6 text-barca-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
    input(class="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" v-model='searchContent' placeholder="Search...")
</template>

<script setup lang="js">
import { watchDebounced } from '@vueuse/core';

  const searchContent = ref ('')
  watchDebounced(searchContent, async(newValue) => {
    if (newValue.trim() > 2){
      const emit = defineEmits(['userSearchResults'])
      const errorMessage = ref('')
      const res = await $fetch('http://localhost:3000/api/search',{
        method: 'POST',
        body: {
          query: newValue
        }
      })
      if (res.ok){
        emit('userSearchResults', res.data)
      }
      else{
        errorMessage.value = res.errorMessage || 'Search failed'
        emit('userSearchResults', [])
      }
    }
  }, { debounce: 500 }); 
</script>