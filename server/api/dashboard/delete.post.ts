import UserPost from "~~/server/models/UserPost.model";
import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const deletePost = await UserPost.deleteOne({ _id: new toId(body) });
    console.log('post deleted: ', deletePost)
    return { error: false, message: 'Post deleted successfully' };
})