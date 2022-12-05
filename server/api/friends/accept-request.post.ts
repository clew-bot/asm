import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    console.log('222')
    const id:any = await useStorage().getItem("user");
    const body = await readBody(event);
    const myId = new toId(id);
    const userId = new toId(body.fromId)
    const notifId = new toId(body.notifId)
    console.log('111', body)
    // update users friends
    const theUser = await UserModel.findOneAndUpdate({
        _id: userId
    }, {
        $push: {
            friends: myId
        }
    }, {
        new: true
    })
    const updateMe = await UserModel.findOneAndUpdate({
        _id: myId
    }, {
        $push: {
            friends: userId
        }
    }, {
        new: true
    })

    // update 
    const updateNotif = await NotificationModel.findOneAndUpdate({
        _id: notifId
    }, {
        $set: {
            title: "New Friend!",
            content: "You are now friends with " + theUser?.username,
            read: true
        }
    }, {
        new: true
    }, )

    console.log('theUser', theUser)
    console.log('updateMe', updateMe)
    console.log('updateNotif', updateNotif)

    return "hi"
});
