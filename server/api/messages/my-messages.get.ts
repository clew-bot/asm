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
            "$match": { 
                "from": id
            }
        },
        // Sorting pipeline
        { 
            "$sort": { 
                "createdAt": -1 
            } 
        },
        // Grouping pipeline
        {
            "$group": {
                "_id": "$to",
                "content": {
                    "$first": "$content" 
                },
                "createAt": {
                    "$first": "$createdAt" 
                }
            }
        },
        // // Project pipeline, similar to select
        {
             "$project": { 
                "_id": 0,
                "from": "$_id",
                "content": 1,
                "createdAt": 1
            }
        }
    ],
);

  return { getMessageFromUsers, getMyMessages };
});
