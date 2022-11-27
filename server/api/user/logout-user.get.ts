export default defineEventHandler(async (event) => {
    const cookie = deleteCookie(event, "altine");
    await useStorage().removeItem("user");
    return "Logged Out!";
})