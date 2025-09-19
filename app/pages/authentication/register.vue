<template lang="pug">
.div.min-h-screen.bg-gray-100.text-gray-900.flex.justify-center
  .max-w-screen-xl.m-0(class="sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1")
    div(class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12")
      div
        img.w-32.mx-auto(src="https://www.freepnglogos.com/uploads/fc-barcelona-png-logo/barca-blaugranes-for-barcelona-fans-png-logo-16.png")
      .mt-12.flex.flex-col.items-center
        h1.text-2xl(class="xl:text-3xl font-extrabold") Welcome Barça fans
        .w-full.flex-1.mt-8
          .flex.flex-col.items-center
            button.w-full.max-w-xs.font-bold.shadow-sm.rounded-lg.py-3.bg-indigo-100.text-gray-800.flex.items-center.justify-center.transition-all.duration-300.ease-in-out(
              class="focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
            )
              .bg-white.p-2.rounded-full
                svg.w-4(viewBox="0 0 533.5 544.3")
                  path(fill="#4285f4" d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z")
                  path(fill="#34a853" d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z")
                  path(fill="#fbbc04" d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z")
                  path(fill="#ea4335" d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z")
              span.ml-4 Sign Up with Google

          .my-12.border-b.text-center
            .leading-none.px-2.inline-block.text-sm.text-gray-600.tracking-wide.font-medium.bg-white.transform(class="translate-y-1/2") Or sign up with username

          .mx-auto.max-w-xs
            input.w-full.px-8.py-4.rounded-lg.font-medium.bg-gray-100.border.border-gray-200.placeholder-gray-500.text-sm(
              name= "name" placeholder="Name"
              class="focus:outline-none focus:border-gray-400 focus:bg-white"  v-model="name"
            )
            input.mt-5.w-full.px-8.py-4.rounded-lg.font-medium.bg-gray-100.border.border-gray-200.placeholder-gray-500.text-sm(
              name= "username" type="username" placeholder="Username"
              class="focus:outline-none focus:border-gray-400 focus:bg-white" v-model="username"
            )
            input.w-full.px-8.py-4.rounded-lg.font-medium.bg-gray-100.border.border-gray-200.placeholder-gray-500.text-sm.mt-5(
              name="password" type="password" placeholder="Password"
              class="focus:outline-none focus:border-gray-400 focus:bg-white" v-model="password"
            )
            input.w-full.px-8.py-4.rounded-lg.font-medium.bg-gray-100.border.border-gray-200.placeholder-gray-500.text-sm.mt-5(
              name="password_confirmation" type="password" placeholder="Confirm your password"
              class="focus:outline-none focus:border-gray-400 focus:bg-white" v-model="password_confirmation"
            )
            button.mt-5.tracking-wide.font-semibold.bg-indigo-500.text-gray-100.w-full.py-4.rounded-lg.transition-all.duration-300.ease-in-out.flex.items-center.justify-center(
              class="hover:bg-indigo-700 focus:shadow-outline focus:outline-none", @click="handleSignup()"
            )
              svg.w-6.h-6.-ml-2(fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
                path(d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2")
                circle(cx="8.5" cy="7" r="4")
                path(d="M20 8v6M23 11h-6")
              span.ml-3 Sign Up
            p.mt-6.text-xs.text-gray-600.text-center
              router-link.text-indigo-500.font-semibold(to="/authentication/login") Already have an account?
    .flex-1.bg-indigo-100.text-center.hidden(class="lg:flex")
      div(
      class="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"
      style='background-image: url("https://pictures.tribuna.com/image/80557fc2-41db-429a-a472-d1b0874bc886?width=1920&quality=70")'
      )
</template>
<script setup lang="ts">
  const name = ref('')
  const username = ref('')
  const password = ref('')
  const password_confirmation = ref('')
  const error = ref('')
  const handleSignup = async () =>{
    if(password.value !== password_confirmation.value){
      error.value = 'Password and Confirm Password do not match'
      return
    }
    try{
      await $fetch('http://localhost:3000/api/users',{
        method: 'POST',
        body: {
          name: name.value,
          username: username.value,
          password: password.value,
          password_confirmation: password_confirmation.value
        }
      })
      await navigateTo('/authentication/login')
    }catch(e:any){
      error.value = e.data?.message || 'An error occurred during registration'
    }
  }
</script>
