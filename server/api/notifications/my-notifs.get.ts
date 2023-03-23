import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
     const findNotifications = 
     await UserModel.findOne({ _id: new toId(id) })
    .populate({ 
        path: "notifications", 
        populate: { path: "from", 
            select: ["username", "coverPicture", "profilePicture", "handleName"] }, 
        options: { sort: { createdAt: -1 },} })
        .select("username")
    if(findNotifications) {
        return findNotifications.notifications
    } else {
        return []
    }
});
