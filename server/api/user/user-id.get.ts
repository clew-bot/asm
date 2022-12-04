export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    return id;
})