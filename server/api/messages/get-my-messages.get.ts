import mongoose from "mongoose";
import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";

const toId = mongoose.Types.ObjectId;


export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const myId = new toId(id);
    const body = await readBody(event);
    const {message, to} = body;
    const toUserId = new toId(to);

    return "hi"

    
});
