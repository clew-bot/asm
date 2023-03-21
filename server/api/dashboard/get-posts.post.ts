import UserPost from "~~/server/models/UserPost.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let perPage = 10; 
    let page = Math.max(0, body);
    const id:any = await useStorage().getItem("user");
    const getPosts = await UserPost.find({}).populate('author', ['username', 'handleName', 'profilePicture']).sort({createdAt: -1}).limit(perPage).skip(perPage * page).populate('reactions').populate('poll');
    return getPosts;

})