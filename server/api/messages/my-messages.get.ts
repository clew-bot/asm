import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
  console.log("im hit");
  const id: any = await useStorage().getItem("user");
  const myId = new toId(id);
  console.log(myId);

  const getMessageFromUsers = await UserModel.findOne({
    _id: myId,
  })
    .populate({
      path: "messages",
      select: "username profilePicture handleName",
    })
    .select("messages")
    .exec();

  // const getMyMessages = await MessageContentModel.find({
  //     $or: [
  //         {from: myId},
  //         {to: myId}
  //     ]
  // }).populate({
  //     path: "from",
  //     select: "username profilePicture handleName"
  // }).populate({
  //     path: "to",
  //     select: "username profilePicture handleName"
  // }).sort({createdAt: -1}).
  // exec();

  //  const getMyMessages = await MessageContentModel.find({
  //     $or: [
  //         {from: myId},
  //         {to: myId}
  //     ]
  // }).populate({
  //     path: "from",
  //     select: "username profilePicture handleName"
  // }).populate({
  //     path: "to",
  //     select: "username profilePicture handleName"
  // }).sort({createdAt: -1}).
  // exec();
  const getMyMessages = await MessageContentModel.aggregate(
    [
        // Matching pipeline, similar to find
        { 
            $match: { 
                $or: [
                    {from: id},
                    // {to: id}
                ]
            }
        },
        // // Unwinding pipeline
        // { $project: {
        //     from: 1,
        //     to: 1,
        //     content: 1,
        //     createdAt: 1,
        //     _id: 0

        // }},
        { 
            $sort: { 
                "createdAt": -1 
            } 
        },
        // Grouping pipeline
        {
            $group: {
                _id: {$concat: ['$to', '$from']},
                from : {$first: '$from'},
                to: {$first: 
                    {$cond: [
                        {$eq: ['$from', id]},
                        '$to',
                        '$from'
                    ]}
                },
                msg: {$first: '$content'},
                timestamp: {$first: '$createdAt'}
            }
        },
     
        // // Project pipeline, similar to select
        // {
        //      "$project": { 
        //         "_id": 0,
        //         "from": "$_id",
        //         "content": 1,
        //         "createdAt": 1
        //     }
        // }
        //populate from and to
        // {
        //     $lookup: {
        //         from: "User",
        //         localField: "from",
        //         foreignField: "_id",
        //         as: "from"
        //     }
        // },
        // {
        //     $lookup: {
        //         from: "User",
        //         localField: "to",
        //         foreignField: "_id",
                
        //         as: "to"
        //     }
        // },
        // {
        //     $project: {
        //         from: {$arrayElemAt: ["$from", 0]},
        //         to: {$arrayElemAt: ["$to", 0]},
        //         msg: 1,
        //         timestamp: 1
        //     }
        // }
    ],
)

  return { getMessageFromUsers, getMyMessages };
});
