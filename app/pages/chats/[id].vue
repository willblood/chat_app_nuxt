<template lang="pug">
  .flex-1.flex.flex-col.h-screen
    ChatHeader
    Conversation
    div(class="bg-white border-t p-4")
      div(class="max-w-4xl mx-auto flex items-center space-x-4")
        button(class="p-2 text-gray-500 hover:text-gray-700 transition")
          svg(class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24")
            path(
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            )

        button(class="p-2 text-gray-500 hover:text-gray-700 transition")
          svg(class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24")
            path(
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            )

        input(
          type="text"
          placeholder="Type your message..."
          class="flex-1 p-2 m-2 border rounded-full focus:outline-none focus:border-barca-yellow"
        )

        button(class="p-2 text-white bg-yellow-600 rounded-full hover:bg-barca-yellow transition")
          svg(class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24")
            path(
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            )

</template>
<script setup lang="js">
  definePageMeta({
    middleware: 'auth',
    layout: 'chat'
  })

  const route = useRoute()
  const userId = route.params.id
  const chat = ref(null)
  const chatMessages = ref([])
  const { data, pending, error } = await useFetch("http://localhost:3000/api/chats/",{
    method: 'POST',
    body: { user_id: userId },
    headers: {
      'Authorization': `Bearer ${useCookie('authToken').value}`
    }
  })
  chat.value = data.value
  console.log('Chat data:', data.value)
</script>
