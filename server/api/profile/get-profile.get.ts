import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const user = await UserModel.findById({ _id: new toId(id) });
    console.log(user)

    return user
})