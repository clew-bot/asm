import UserPost from "~~/server/models/UserPost.model";
import UserModel from "~~/server/models/User.model";
import PollModel from "~~/server/models/PollModel.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('body', body)
    const id:any = await useStorage().getItem("user");
    return "Hi"
})