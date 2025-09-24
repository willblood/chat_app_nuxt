<template lang ="pug">
  div( class="flex h-screen bg-white overflow-x-hidden ")
    div( class="hidden sidebar md:flex flex-col w-60 bg-barca-red border-r-4 border-yellow-400")
      .flex.items-center.justify-center.flex-col.h-20.border-b-4.border-yellow-400
        img.w-12.h-12.rounded-full(src="https://www.freepnglogos.com/uploads/fc-barcelona-png-logo/barca-blaugranes-for-barcelona-fans-png-logo-16.png")
        p.text-white.text-2xl.font-bold Barça Fan club
      .flex.flex-col.flex-1.overflow-y-auto.mt-5
        SearchBar
        Sidebar
    .relative.flex.flex-col.flex-1.overflow-x-hidden
      Navbar(@toggleSidebar = "handleToggleSidebar")
      slot
</template>
<script setup lang="js">
  const isSidebarOpen = ref(false)
  const handleToggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    if (sidebar){
      if (isSidebarOpen.value) {
        sidebar.classList.add('hidden')
      } else {
        sidebar.classList.remove('hidden')
      }
    }
    isSidebarOpen.value = !isSidebarOpen.value
  }
</script>

