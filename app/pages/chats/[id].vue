<template lang="pug">
  .flex-1.flex.flex-col.h-screen
    ChatHeader

    //- Messages container
    div.flex-1.w-full.overflow-y-auto.p-4.chat-container.bg-gray-100
      div.max-w-4xl.mx-auto.space-y-4
        div(v-for="(msg, index) in chatMessages" :key="index" :class="getMessageContainerClass(msg)")
          //- Avatar
          img(
            :src="msg.user_id === currentUser ? currentUserAvatar : otherUserAvatar"
            :alt="msg.user"
            class="w-8 h-8 rounded-full object-cover"
          )

          //- Message bubble
          div
            div(:class="getMessageClass(msg)")
              p {{ msg.content }}
            span.text-gray-500.text-xs.message-time {{ formatTime(msg.created_at) }}

    //- Message input/footer
    div.bg-white.border-t.p-4
      div.max-w-4xl.mx-auto.flex.items-center.space-x-4
        input(
          type="text"
          placeholder="Type your message..."
          v-model="message"
          @keyup.enter="sendMessage"
          class="flex-1 p-2 m-2 border rounded-full focus:outline-none focus:border-barca-yellow"
        )
        button(@click="sendMessage" class="p-2 text-white bg-yellow-600 rounded-full hover:bg-barca-yellow transition")
          svg(class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8")
</template>

<script setup lang="js">
  import { ref, onMounted, onBeforeUnmount, watch } from "vue"
  import { useNuxtApp, useCookie, useRoute } from "#app"

  // --- Page setup ---
  definePageMeta({
    middleware: 'auth',
    layout: 'chat'
  })

  const route = useRoute()
  const userId = route.params.id

  // --- Reactive states ---
  const chat = ref(null)
  const chatMessages = ref([])
  const message = ref('')
  const currentUser = useCookie('userId').value
  const currentUserAvatar = 'https://your-avatar-url.webp'
  const otherUserAvatar = 'https://other-user-avatar-url.webp'

  // --- Fetch chat from backend ---
  const { data } = await useFetch("http://localhost:3000/api/chats/", {
    method: 'POST',
    body: { user_id: userId },
    headers: { 'Authorization': `Bearer ${useCookie('authToken').value}` }
  })

  chat.value = data.value?.chat
  chatMessages.value = data.value?.messages || []
  const roomId = chat.value?.name

  // --- Action Cable subscription ---
  const { $cable } = useNuxtApp()
  let chatChannel = null

  onMounted(() => {
    if (!roomId) return

    chatChannel = $cable.subscriptions.create(
      { channel: "ChatChannel", room: roomId },
      {
        received(data) {
          console.log("Received data:", data)
          chatMessages.value.push(data)
        },
        speak(messageContent) {
          this.perform("speak", { message: messageContent })
        }
      }
    )
  })

  onBeforeUnmount(() => {
    if (chatChannel) chatChannel.unsubscribe()
  })

  // --- Send message ---
  async function sendMessage() {
    if (!message.value.trim()) return

    try {
      await $fetch(`http://localhost:3000/api/messages`, {
        method: 'POST',
        body: { chat_id: chat.value.id, content: message.value },
        headers: { 'Authorization': `Bearer ${useCookie('authToken').value}` }
      })
      message.value = ''
    } catch (err) {
      console.error('Failed to send message', err)
    }
  }

  // --- Scroll to bottom on new messages ---
  watch(chatMessages, () => {
    const container = document.querySelector('.chat-container')
    if (container) container.scrollTop = container.scrollHeight
  })

  // --- Optional: format timestamp ---
  function formatTime(timestamp) {
    if (!timestamp) return ''
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  // --- Helper functions for classes ---
  function getMessageClass(msg) {
    return msg.user_id !== currentUser
      ? 'bg-barca-blue rounded-lg rounded-tl-none p-3 shadow-md max-w-md'
      : 'bg-barca-red text-white rounded-lg rounded-tr-none p-3 shadow-md max-w-md'
  }

  function getMessageContainerClass(msg) {
    return msg.user_id !== currentUser
      ? 'flex items-start space-x-2'
      : 'flex items-start justify-end space-x-2'
  }
</script>
