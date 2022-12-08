import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const body = await readBody(event);
    const myId = new toId(id);
    const userId = new toId(body.fromId.fromId)
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

    // add notification to me
    const addNotifMe = await UserModel.updateOne({ _id: myId }, { $push: { notifications: newNotificationForMe._id } });

    // update the other user
    const newNotificationForUser = await new NotificationModel({
        title: "Friend Request Accepted",
        content: "You are now friends with " + updateMe?.username,
        type: "friendRequestAccepted",
        from: myId,
    }).save();

    // add notification to user
    const addNotif = await UserModel.updateOne({ _id: userId }, { $push: { notifications: newNotificationForUser._id } });

    const updateMyNotif = await NotificationModel.findOneAndUpdate({
        'from': userId,
        'type': 'friendRequestReceived',
        'to': myId,
    }, {
        $set: {
            content: "You are now friends with " + theUser?.username,
            type: "friendRequestAccepted",
            read: true,
        }
    }, {
        new: true
    })

    const allNotifications = await UserModel.findOne({ _id: myId })
    .populate({ 
        path: "notifications", 
        populate: {
            path: "from"
        },
        options: { sort: { createdAt: -1 },} })
    return { allNotifications }
});
