
export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Client Middleware Ran");
    const cookie = useCookie("altine");
    if (!cookie.value) {
            navigateTo("/login");
        }   
        return;
})