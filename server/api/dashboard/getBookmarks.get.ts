import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;


export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    const findBookmarks = await UserModel.findById(id).populate({
        path: 'bookmarks',
        populate: [
            { path: 'author' },
            { path: 'poll' } // Add this line to populate the polls property inside pinnedPost
        ]
    }).exec();

    return findBookmarks;

    
});
