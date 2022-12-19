import UserPost from "~~/server/models/UserPost.model";
import UserSchema from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log("thebody", body);
    const id = new toId(body);
    console.log('id: ', id)
    const pinnedPost = await UserPost.findOne({
        _id: id
    })
    console.log('pinnedPost: ', pinnedPost)
    return pinnedPost
})

//639295353859ce9fe550660b

// piined: 63a0d7e116faee385bee2a7b