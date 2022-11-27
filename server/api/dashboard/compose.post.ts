import UserPost from "~~/server/models/UserPost.model";

import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
    let id;
    console.log("hiiiiiiiii")
    const body = await readBody(event);
    console.log("run");
    const cookie:any = getCookie(event, "altine");
    jwt.verify(cookie, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log("err");
            return "False";
        } else {
            console.log("decoded", decoded);
            id = decoded.id;
        }
      }
    )
     console.log(toId(id))
     const postStatus = await UserPost.create({
        author: toId(id),
        content: body.post,
    });
    console.log(postStatus);
    // console.log(body, decoded.name)
})