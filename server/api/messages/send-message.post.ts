import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";
import ConversationModel from "~~/server/models/Conversation.model";

import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;


export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const myId = new toId(id);
    const body = await readBody(event);
    const {message, to} = body;
    const toUserId = new toId(to);

    // const messageContentToUser = await new MessageContentModel({
    //     content: message,
    //     from: myId,
    //     users: [myId, toUserId]
    // }).save();
     const messageContentToUser = await new MessageContentModel({
        content: message,
        owner: myId,
        recipient: toUserId
    }).save();

    // see if conversation exists
    const conversation = await ConversationModel.findOne({
        users: { $all: [myId, toUserId] }
    });

    console.log('conversation: ', conversation);

    if (conversation) {
        // set latestMessage
        const updateConversation = await ConversationModel.findOneAndUpdate(
            { _id: conversation._id },
            { latestMessage: message,
              from: myId, },
            { new: true }
        );
    } else {
        // create new conversation
        const newConversation = await new ConversationModel({
            users: [myId, toUserId],
            latestMessage: message,
            from: myId,
        }).save();
        // update both users with new conversation
        await UserModel.findOneAndUpdate(
            { _id: myId },
            { $push: { conversations: newConversation._id } }
        );
        const updateUser = await UserModel.findOneAndUpdate(
            { _id: toUserId },
            { $push: { conversations: newConversation._id } }
        );
        console.log(updateUser)
    }

    const options = {
        myId,
        toUserId,
    }

    return "hi"
        });
