import { useUserStore } from "~~/store/userStore";
export default defineNuxtRouteMiddleware(async (to, from) => {
    const cookie = useCookie("altine");
    const store = useUserStore();
    await store.getUser();
    console.log(store.$state.profilePicture)
    console.log(store.$state.friends)
    if(!store.$state.userId && cookie) {
    await store.getUser();
    }
    console.log("Client Middleware Ran");  
    if (!cookie.value) {
            navigateTo("/login");
        }   
        return;
})