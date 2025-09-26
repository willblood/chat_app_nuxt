<template lang="pug">
  //- Chat Header
  div(class="bg-barca-red text-white p-4 shadow-lg")
    div(class="max-w-4xl mx-auto flex items-center justify-between")
      div(class="flex items-center space-x-4")
        img(
          class="w-10 h-10 rounded-full object-cover border-2 border-white"
          src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
          alt="Profile"
        )
        div
          h1(class="font-bold") Abhiraj K
      div(class="flex items-center space-x-4")
        button(class="p-2 hover:bg-blue-700 rounded-full transition")
          svg(class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24")
            path(
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            )
        button(class="p-2 hover:bg-blue-700 rounded-full transition")
          svg(class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24")
            path(
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            )
        button(class="p-2 hover:bg-blue-700 rounded-full transition")
          svg(class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24")
            path(
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            )
</template>