
export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Client Middleware Ran");
    const cookie = useCookie("altine");
    if (to.fullPath === "/dashboard") {
        if (!cookie.value) {
            navigateTo("/login");
        }   
        return;
    }

})