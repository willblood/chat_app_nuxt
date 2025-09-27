<template lang="pug">
  div(class="flex-1 w-full overflow-y-auto p-4 chat-container bg-gray-100")
    div(class="max-w-4xl mx-auto space-y-4")
      
      //- Loop through chatMessages
      div(v-for="(msg, index) in chatMessages" :key="index" 
          :class="{'flex items-start space-x-2': msg.user !== currentUser, 'flex items-start justify-end space-x-2': msg.user === currentUser }")
        
        //- Avatar
        img(
          :src="msg.user === currentUser ? currentUserAvatar : otherUserAvatar"
          :alt="msg.user"
          class="w-8 h-8 rounded-full object-cover"
        )

        //- Message bubble
        div
          div(
            :class="{
              'bg-barca-blue rounded-lg rounded-tl-none p-3 shadow-md max-w-md': msg.user !== currentUser,
              'bg-barca-red text-white rounded-lg rounded-tr-none p-3 shadow-md max-w-md': msg.user === currentUser
            }"
          )
            p {{ msg.content }}

          //- Time
          span(class="text-gray-500 text-xs message-time") {{ formatTime(msg.created_at) }}
</template>
