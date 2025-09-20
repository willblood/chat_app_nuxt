<template lang="pug">
  .flex.items-center.justify-between.h-16.bg-barca-blue.border-b.border-gray-200
    //- Left side
    .flex.items-center.ml-4
      button(class="md:hidden mr-4 focus:outline-none")
        svg(class="w-6 h-6 text-barca-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
      input(class="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search...")
    //- Right side
    .flex.items-center.mr-4
      img(class="w-10 h-10 cursor-pointer rounded-full border-2 border-yellow-400" src="https://ui-avatars.com/api/?name=User&background=random&size=64" alt="User Avatar")
</template>