import UserModel from "~~/server/models/User.model";
import PostComment from "~~/server/models/PostComment.model";
import UserPost from "~~/server/models/UserPost.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    // const findPost = await UserPost.find({ _id: new toId(body) });
    // console.log('post found: ', findPost)
    const findComments = await PostComment.find({ postRef: body }).populate('author', ['username', 'profilePicture', 'handleName']).sort({ createdAt: -1 });
    console.log('comments found: ', findComments)

    return findComments;
})