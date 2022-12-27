import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
  const id: any = await useStorage().getItem("user");
  const myId = new toId(id);
  const body = await readBody(event);

  // find id of user 
  const theUser = await UserModel.findOne({ handleName: body }).select('_id');
  console.log(body);
  console.log(theUser);

//   find messages from me to user
    const messagesToUser = await MessageContentModel.find({
        owner: myId,
        recipient: theUser?._id
    }).populate('owner recipient');

    // find messages from user to me
    const messagesFromUser2 = await MessageContentModel.find({
        owner: theUser?._id,
        recipient: myId
    }).populate('owner recipient');

    // combine messages
    const allMessages = messagesToUser.concat(messagesFromUser2);
    // sort messages by date
    allMessages.sort((a: any, b: any) => {
        return a.createdAt - b.createdAt;
    });


    console.log('FIRST::::::: ',messagesToUser);
    console.log('SECONDO!!!!!!!!!!!!!! ', messagesFromUser2);

  return allMessages;
  
});
