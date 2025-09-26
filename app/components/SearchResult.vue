<template lang="pug">
  template(v-if="users.length >= 1" )
    .relative.flex.flex-col.mt-5.mb-5
      h2.text-white.text-xl.font-bold.px-4.mb-2 Search Results
      ul.divide-y.divide-gray-300
        li(v-for="user in users" :key="user.id" class="p-4 bg-barca-blue hover:bg-gray-100 cursor-pointer")
          .flex.items-center
            img.w-10.h-10.rounded-full.mr-4(src="https://ui-avatars.com/api/?name=Messi&background=random&size=64" alt="User Avatar")
            .flex.flex-col
              span.font-semibold {{ user.username }}
</template>
<script setup lang="js">
  defineProps({
    users: {
      type: Array,
      required: true
    }
  })
</script>