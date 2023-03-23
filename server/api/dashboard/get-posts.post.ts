// import mongoose from "mongoose";
import UserPost from "~~/server/models/UserPost.model";
import ReactionModel from "~~/server/models/Reactions.model";
import PollModel from "~~/server/models/PollModel.model";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let perPage = 10; 
    let page = Math.max(0, body);
    const id:any = await useStorage().getItem("user");
    const getPosts = await UserPost.find({}).populate('author', ['username', 'handleName', 'profilePicture']).sort({createdAt: -1}).limit(perPage).skip(perPage * page).populate({
        path: "reactions",
        options: { sort: { createdAt: -1 },}
    }).populate({
        path: "poll",
        options: { sort: { createdAt: -1 },}
    })
    return getPosts;
    })
