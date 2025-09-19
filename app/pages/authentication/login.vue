<template lang="pug">
  div(class="flex h-screen bg-white items-center justify-center m-5")
    div(class="w-full max-w-md m-auto bg-gradient-to-b from-blue-800 to-red-700 rounded-2xl shadow-2xl p-8")
      header
        img(class="w-32 mx-auto mb-8 rounded-full border-4 border-yellow-400" src="https://www.freepnglogos.com/uploads/fc-barcelona-png-logo/barca-blaugranes-for-barcelona-fans-png-logo-16.png")
        h1(class="text-center text-white text-3xl font-bold mb-8") Barça Fan Login
      form(class="bg-white rounded-xl p-6 shadow-lg" @submit.prevent="handleLogin")
        div.mb-6
          label(class="block mb-3 text-blue-800 font-semibold text-lg" for="username") Username
          input(class="w-full p-4 text-lg border-2 border-red-700 focus:border-blue-800 outline-none rounded-lg" type="text" name="username" placeholder="Enter username" v-model="username")
        div.mb-6
          label(class="block mb-3 text-blue-800 font-semibold text-lg" for="password") Password
          input(class="w-full p-4 text-lg border-2 border-red-700 focus:border-blue-800 outline-none rounded-lg" type="password" name="password" placeholder="Enter password" v-model="password")
        div
          button(class="w-full bg-blue-800 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 cursor-pointer" type="submit") Log In
      footer(class="mt-6 flex justify-between text-base")
        router-link.text-blue-800(to="/authentication/register") Forgot password 
        router-link.text-blue-800(to="/authentication/register") Create Account
  p(v-if="errorMessage" class="text-red-500") {{ errorMessage }}
</template>
<script setup lang="js">
  const errorMessage = ref('')
  const username = ref('')
  const password = ref('')

  const handleLogin = async ()=>{
    if(!username.value || !password.value){
      errorMessage.value = 'Please enter both username and password'
      return
    }
    try{
      const res = await $fetch('http://localhost:3000/api/authenticate',{
        method: 'POST',
        body: {
          username: username.value,
          password: password.value,
        }
      })
      console.log(res)
      if (res.token) {
        const authToken = useCookie('authToken')
        authToken.value = res.token
        await navigateTo('/chats');
      } else {
        errorMessage.value = res.errorMessage || 'Invalid username or password';
      }
    }catch(e){
      errorMessage.value = e.data?.message || 'An errorMessage occurred during registration'
    }
  }
</script>