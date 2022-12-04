import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
    console.log('hi from edit-profile')
    const id:any = await useStorage().getItem("user");
    const body = await readBody(event);

    const filteredBody = Object.keys(body).reduce((acc:any, key:any) => {
        if (body[key]) acc[key] = body[key];
        return acc;
    }, {});

    const user = await UserModel.findByIdAndUpdate(id, filteredBody, {
        new: true,
    });
    return { 'error' : false, 'message' : 'Profile updated successfully', 'user' : user }
})