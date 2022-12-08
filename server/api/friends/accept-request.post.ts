import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const body = await readBody(event);
    console.log('222', body.fromId.fromId)
    const myId = new toId(id);
    const userId = new toId(body.fromId.fromId)
    console.log('111', body)
    const theUser = await UserModel.findOneAndUpdate({
        _id: userId
    }, {
        $push: {
            friends: myId
        },
        $inc: { notificationCount: 1 } ,
        $pullAll: { friendRequestsSent: [myId] }
    }, {
        new: true
    })



    const updateMe = await UserModel.findOneAndUpdate({
        _id: myId
    }, {
        $push: {
            friends: userId
        },
        $inc: { notificationCount: 1 },
        $pullAll: { friendRequests: [userId] } 
    }, {
        new: true
    })

    // update 
    const newNotificationForMe = await new NotificationModel({
        title: "Friend Request Accepted",
        content: "You are now friends with " + theUser?.username,
        type: "friendRequestAccepted",
        from: userId,
    }).save();
    console.log(newNotificationForMe);

    // add notification to me
    const addNotifMe = await UserModel.updateOne({ _id: myId }, { $push: { notifications: newNotificationForMe._id } });

    // update the other user
    const newNotificationForUser = await new NotificationModel({
        title: "Friend Request Accepted",
        content: "You are now friends with " + updateMe?.username,
        type: "friendRequestAccepted",
        from: myId,
    }).save();
    console.log(newNotificationForUser);

    // add notification to user
    const addNotif = await UserModel.updateOne({ _id: userId }, { $push: { notifications: newNotificationForUser._id } });


    // const updateMyNotif = await NotificationModel.findOneAndUpdate({
    //     _id: notifId
    // }, {
    //     $set: {
    //         read: true,
    //         type: "friendRequestAccepted"
    //     }
    // }, {
    //     new: true
    // }, )


    const allNotifications = await UserModel.findOne({ _id: myId })
    .populate({ 
        path: "notifications", 
        populate: {
            path: "from"
        },
        options: { sort: { createdAt: -1 },} })
    console.log(allNotifications)


    console.log(allNotifications)
    return { allNotifications }
});
