<template lang="pug">
  div(class="flex-1 w-full overflow-y-auto p-4 chat-container bg-gray-100")
    div(class="max-w-4xl mx-auto space-y-4")

      //- Receiver Message
      div(class="flex items-start space-x-2")
        img(
          src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp" 
          alt="Abhiraj"
          class="w-8 h-8 rounded-full object-cover"
        )
        div
          div(class="bg-barca-blue rounded-lg rounded-tl-none p-3 shadow-md max-w-md")
            p
              | Hi there! Welcome to my portfolio chat. Feel free to explore my work at 
          span(class="text-gray-500 text-xs message-time") 11:42 AM

      //- Sender Message
      div(class="flex items-start justify-end space-x-2")
        div(class="flex flex-col items-end")
          div(class="bg-barca-red text-white rounded-lg rounded-tr-none p-3 shadow-md max-w-md")
            p Amazing work! I'm impressed with your projects and technical skills.
          span(class="text-gray-500 text-xs message-time") 11:43 AM
        img(
          src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp" 
          alt="User"
          class="w-8 h-8 rounded-full object-cover"
        )

      //- Receiver Message
      div(class="flex items-start space-x-2")
        img(
          src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp" 
          alt="Abhiraj"
          class="w-8 h-8 rounded-full object-cover"
        )
        div
          div(class="bg-barca-blue rounded-lg rounded-tl-none p-3 shadow-md max-w-md")
            p Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?
          span(class="text-gray-500 text-xs message-time") 11:44 AM
</template>
