import UserSchema from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const id:any = await useStorage().getItem("user");
    const user = await UserSchema.findOne({ handleName: body }).populate("posts").lean();
    return user
})