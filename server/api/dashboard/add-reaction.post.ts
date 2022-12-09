import UserPost from "~~/server/models/UserPost.model";
import UserModel from "~~/server/models/User.model";
import ReactionModel from "~~/server/models/Reactions.model";

import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('body: ', body)
    const theReaction = body.theReaction;
    const postIden = body.statusId;
    const postId = new toId(postIden);
    const id:any = await useStorage().getItem("user");
    const myId = new toId(id);

    
    const newReaction = await new ReactionModel({
    reactionType: theReaction,
    postReactedTo: postId,
    userId: body.userId,
    from: myId
    }).save();

    const updatePost = await UserPost.findOneAndUpdate({
        _id: postId
    }, {
        $push: {
            reactions: newReaction._id
        }
    }, {
        new: true
    })

    const updateMe = await UserModel.findOneAndUpdate({
        _id: body.userId
    }, {
        $push: {
            reactions: newReaction._id
        }
    }, {
        new: true
    })

  return newReaction;
});
