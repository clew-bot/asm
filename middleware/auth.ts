
export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Client Middleware Ran");
    console.log("to", to.fullPath);
    const cookie = useCookie("altine");
    console.log("cookie", cookie.value);
    if (to.fullPath === "/dashboard") {
        if (!cookie.value) {
            navigateTo("/login");
        }   
        return;
    }

})