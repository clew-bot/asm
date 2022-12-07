import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
    console.log('START')
    const id:any = await useStorage().getItem("user");
    const myPic = await UserModel.findOne({
        _id: new toId(id)}, ['notificationCount']);

    return { notificationCount: myPic?.notificationCount }
})