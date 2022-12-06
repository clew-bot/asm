import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    const myId:any = await useStorage().getItem("user");
    const body = await readBody(event);
    const userId = new toId(body.id)
    const id = new toId(myId);
    console.log("sr: ", body.id);
    console.log('sw: ', id)
    // add user to friend request list
    const addFriend = await UserModel.updateOne(
        { _id: userId },
        { $push: { friendRequests: id, } },
    );

    // add me to friend request sent list
    const addMe = await UserModel.updateOne(
        { _id: id },
        { $push: { friendRequestsSent: userId } },
    );
    const newNotificationForUser = await new NotificationModel({
        title: "Friend Request",
        content: "You have a new friend request",
        type: "friendRequestReceived",
        from: id,
    }).save();
    console.log(newNotificationForUser);

    const newNotificationForMe = await new NotificationModel({
        title: "Friend Request",
        content: "You have sent a friend request to " + body.username,
        type: "friendRequestSent",
        from: userId,
    }).save();
    console.log(newNotificationForMe);

    // add notification to user
    const addNotif = await UserModel.updateOne({ _id: userId }, { $push: { notifications: newNotificationForUser._id } });

    // add notification to me
    const addNotifMe = await UserModel.updateOne({
         _id: id }, 
         { $push: 
            { notifications: newNotificationForMe._id }, });

    console.log(addNotif);
        
    // console.log(addFriend)
    return "hi"
});
