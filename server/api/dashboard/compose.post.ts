import UserPost from "~~/server/models/UserPost.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const id:any = await useStorage().getItem("user");
     console.log(new toId(id.id))
     const postStatus = await UserPost.create({
        author: new toId(id),
        content: body.post,
    });
    console.log(postStatus);
    return { error: false, message: "Post Created" };
})