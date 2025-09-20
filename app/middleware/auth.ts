export default defineNuxtRouteMiddleware((to, from)=>{
  const authToken = useCookie("authToken").value
  if (!authToken){
    return navigateTo("/authentication/login")
  }
})