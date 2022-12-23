import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
  console.log("im hit");
  const id: any = await useStorage().getItem("user");
  const myId = new toId(id);

  const getMessages = await UserModel.findById(myId).populate("friends");

  const user2 = await UserModel.findOne({ _id: myId })
  .populate({ path: "messages", select: "username handleName profilePicture" })


  console.log("getMessages: ", getMessages);

  return user2;
});
