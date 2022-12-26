import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;


export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const myId = new toId(id);
    const body = await readBody(event);
    const {message, to} = body;
    const toUserId = new toId(to);

    const messageContentToUser = await new MessageContentModel({
        content: message,
        from: myId,
        to: toUserId
    }).save();

    // const messageContentToMe = await new MessageContentModel({
    //     content: message,
    //     from: toUserId,
    //     to: myId
    // }).save();


    const appendMessage = await UserModel
        .findOneAndUpdate(
        {_id: myId},
        // only push to messages if the message is not already in the array
  
        {upsert: true}
    );

    const appendMessageTo = await UserModel.findOneAndUpdate(
        {_id: toUserId},
        // only push to messages if the message is not already in the array
        {$addToSet: {messages: myId}},
        {upsert: true}
    );

    return "hi"
});
