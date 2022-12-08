import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const myPic = await UserModel.findOne({
        _id: new toId(id)} , ['profilePicture', 'friends', 'friendRequestsSent', 'notificationCount', 'friendRequests'])

    return { id, profilePicture: myPic?.profilePicture, friends: myPic?.friends, friendRequestsSent: myPic?.friendRequestsSent, notificationCount: myPic?.notificationCount, friendRequests: myPic?.friendRequests }
})