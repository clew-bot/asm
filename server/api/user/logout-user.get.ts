export default defineEventHandler(async (event) => {
    const cookie = deleteCookie(event, "altine");
    return "Logged Out!";
})