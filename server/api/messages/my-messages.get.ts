import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
  // console.log("im hit");
  const id: any = await useStorage().getItem("user");
  const myId = new toId(id);
  console.log('myID: ', myId);

  // const getMyMessages = await MessageContentModel.aggregate([
  //   // { $match: { users: myId } },
  //   { $match: { users: myId } },

  //   { $sort: { updatedAt: -1 } },
  //   { $limit: 1 }
  // ])

  // const getMyMessages = await MessageContentModel.aggregate([
  //   { $match: { $or: [{ owner: myId }, { recipient: myId }] } },
  //   {
  //     $addFields: {
  //       me: { $cond: [{ $ne: ["$to", myId] }, "$recipient", "$owner"] },
  //       other: { $cond: [{ $ne: ["$owner", myId] }, "$owner", "$recipient"] },
  //     },
  //   },
  //   {
  //     $group: {
  //       _id: { me: "$me", other: "$other" },
  //       document: { $last: "$$ROOT" },
  //     },
  //   },
  //   { $replaceRoot: { newRoot: "$document" } },
  //   {
  //     $lookup: {
  //       from: "users",
  //       let: { owner: "$owner" },
  //       as: "ownerInfo",
  //       pipeline: [
  //         { $match: { $expr: { $and: [{ $eq: ["$_id", "$$owner"] }] } } },
  //       ],
  //     },
  //   },
  //   { $unwind: "$ownerInfo" },
  //   {
  //     $lookup: {
  //       from: "users",
  //       let: { recipient: "$recipient" },
  //       as: "recipientInfo",
  //       pipeline: [
  //         { $match: { $expr: { $and: [{ $eq: ["$_id", "$$recipient"] }] } } },
  //       ],
  //     },
  //   },
  //   { $unwind: "$recipientInfo" },
  //   { $sort: { createdAt: -1 } },
  // ]);

  const getMyConversations = await UserModel.findOne({ _id: myId }).populate({
    path: "conversations",
    populate: {
      path: "users from",
      model: "User",
      // sort from updated at
      options: { sort: { updatedAt:
        -1 } },
    },
  }).select('conversations')


  return { getMyConversations,  };
});
