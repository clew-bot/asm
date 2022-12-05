import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const body = await readBody(event);
    const userId = new toId(body)
    console.log("sr: ", body);
    console.log('sw: ', id)
    // add user to friend request list
    const addFriend = await UserModel.updateOne(
        { _id: userId },
        { $push: { friendRequests: id, } },
    );
    const newNotification = await new NotificationModel({
        title: "Friend Request",
        content: "You have a new friend request",
        type: "friendRequest",
        from: id,
    }).save();
    console.log(newNotification);

    // add notification to user
    const addNotif = await UserModel.updateOne({ _id: userId }, { $push: { notifications: newNotification._id } });

    console.log(addNotif);
        
    // console.log(addFriend)
    return "hi"
});
