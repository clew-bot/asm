import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    console.log('hi')
    const id:any = await useStorage().getItem("user");
    const user = await UserModel.findById({ _id: new toId(id) })
    .populate({ path: "posts", populate: { path: "author" }, options: { sort: { createdAt: -1 } } })
    return user
})