import UserPost from "~~/server/models/UserPost.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const getPosts = await UserPost.find({}).populate('author', ['username', 'handleName']).sort({createdAt: -1}).exec();
    console.log(getPosts);
    return getPosts;
})