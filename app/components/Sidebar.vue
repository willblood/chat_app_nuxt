<template lang="pug">
  h2.text-white.text-xl.font-bold.px-4.py-3.border-b-4.border-barca-yellow My Chats
  ul.divide-y.divide-yellow-300
    ChatPreview(:chats="chats")
</template>
<script setup lang="js">

  const chats = ref([])
  const authToken = useCookie('authToken').value
  const { data, error } = await useAsyncData('chats', () =>
    $fetch('http://localhost:3000/api/chats/all', {
      headers: { Authorization: `Bearer ${authToken}` }
    })
  )

chats.value = data.value || []

if (error.value) {
  console.error('Error fetching chats:', error.value)
}
console.log('Fetched chats:', chats.value)

</script>
