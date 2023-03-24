import mongoose from "mongoose";
import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";

const toId = mongoose.Types.ObjectId;


export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");
    // const findBookmarks = await UserModel.findById(id)
    
    // .populate({
    //     path: 'bookmarks',
    //     model: 'userposts',

    //     populate: [
    //         { path: 'author', model: 'users' },
    //         // { path: 'poll', model: 'pollmodels' } // Add this line to populate the polls property inside pinnedPost
    //     ],
    // });

    const findBookmarks = await UserModel.aggregate([
        // Populate the bookmarks array with the UserPost documents, along with their author and poll fields
        {
            $match: {
                _id: new toId(id),
            },

        },
        {
            $lookup: {
                from: 'userposts',
                localField: 'bookmarks',
                foreignField: '_id',
                as: 'bookmarks',
            },
        },
        {
            $unwind: '$bookmarks',
        },
        {
            $lookup: {
                from: 'users',
                localField: 'bookmarks.author',
                foreignField: '_id',
                as: 'bookmarks.author',
            },
        },
        {
            $lookup: {
                from: 'pollmodels',
                localField: 'bookmarks.poll',
                foreignField: '_id',
                as: 'bookmarks.poll',
            },
        },
        // Group the bookmarks back into an array
        {
            $group: {
                _id: '$_id',
                bookmarks: { $push: '$bookmarks' },
            },
        },
        // Flatten the bookmarks array
        {
            $project: {
                bookmarks: 1,
            },
        },
    ])
  
      
    // const findBookmarks = await UserModel.aggregate([
    //     // Match the user by ID
    //     {
    //       $match: {
    //         _id: new mongoose.Types.ObjectId(id) ,
    //       },
    //     },
    //     // // Populate the bookmarks array with the UserPost documents, along with their author and poll fields
    //     {
    //       $lookup: {
    //         from: 'userposts',
    //         localField: 'bookmarks',
    //         foreignField: '_id',
    //         as: 'bookmarks',
    //       },
    //     },
    //     {
    //       $unwind: '$bookmarks',
    //     },
    //     // {
    //     //   $lookup: {
    //     //     from: 'users',
    //     //     localField: 'bookmarks.author',
    //     //     foreignField: '_id',
    //     //     as: 'bookmarks.author',
    //     //   },
    //     // },
    //     // {
    //     //   $lookup: {
    //     //     from: 'pollmodels',
    //     //     localField: 'bookmarks.poll',
    //     //     foreignField: '_id',
    //     //     as: 'bookmarks.poll',
    //     //   },
    //     // },
    //     // // Group the bookmarks back into an array
    //     // {
    //     //   $group: {
    //     //     _id: '$_id',
    //     //     bookmarks: { $push: '$bookmarks' },
    //     //   },
    //     // },
    //   ]);
      

    return findBookmarks

    
});
