import { useUserStore } from "~~/store/userStore";
export default defineNuxtRouteMiddleware((to, from) => {
    const cookie = useCookie("altine");
    const store = useUserStore();
    if(!store.$state.userId && cookie) {
    console.log('ra', store)
    store.getUser();
    console.log('after',store.$state.userId)
    }
    console.log("Client Middleware Ran");  
    if (!cookie.value) {
            navigateTo("/login");
        }   
        return;
})