<template lang="pug">

  li( class="px-4 py-3 flex items-center bg-barca-blue text-white hover:bg-yellow-500 cursor-pointer transition" v-for="chat in chats" :key="chat.chat_id" @click="navigateTo(`/chats/${chat.user_id}`)" )
    img.w-12.h-12.rounded-full.border.border-gray-300(
      src="https://ui-avatars.com/api/?name=Messi&background=random&size=64"
    )
    .ml-3
      p.font-semibold {{ chat.user_name }}
      p.text-sm {{ chat.last_message }}
</template>
<script setup lang="js">
  defineProps({
    chats: {
      type: Array,
      required: true
    }
  })
</script>