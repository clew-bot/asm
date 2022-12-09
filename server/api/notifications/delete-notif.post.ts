import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const body = await readBody(event);
    const myId = new toId(id);
    const notifId = new toId(body.notifId);
    const fromId = new toId(body.fromId);

    const deleteNotifFromMe = await UserModel.findOneAndUpdate({
        _id: myId
    }, {
        $pullAll: { notifications: [notifId] }
    }, {
        new: true
    })

    const deleteNotif = await NotificationModel.findOneAndDelete({
        _id: notifId
    })

    console.log('delting notif: ', deleteNotifFromMe)

    return true;
});
