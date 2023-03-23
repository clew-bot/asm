import PostComment from "~~/server/models/PostComment.model";
import UserPost from "~~/server/models/UserPost.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {

    try {
        const body = await readBody(event);
        console.log(body)
   const findPost = await UserPost.findById({
         _id: body,
        }).populate('author', ['username', 'handleName', 'profilePicture']).populate('comments').populate('poll').populate('comments.author', ['username', 'handleName', 'profilePicture']).sort({createdAt: -1}).exec();
console.log(findPost)
    return findPost;
    } catch (error) {
        console.log(error)
    }
})