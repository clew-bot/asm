import UserPost from "~~/server/models/UserPost.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    console.log(id)
    const getPosts = await UserPost.find({}).populate('author', ['username', 'handleName']).sort({createdAt: -1}).exec();
    return getPosts;
})