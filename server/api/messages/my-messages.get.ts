import mongoose from "mongoose";
import UserModel from "~~/server/models/User.model";
import NotificationModel from "~~/server/models/Notif.model";
import MessageContentModel from "~~/server/models/MessageContent.model";

import nuxtConfig from "~~/nuxt.config";
const toId = mongoose.Types.ObjectId;
// const Nitro = require('nitro')
// const app = new Nitro()

// app.get('/messages', (req:any, res:any) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!')
// })
// const io = require('socket.io')

// io.on('connection', (socket:any) => {
//   console.log('a user connected')
//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//   })
//   socket.on('sendMessage', (message:any) => {
//     io.emit('message', message)
//   })
// })


export default defineEventHandler(async (event) => {
  const id: any = await useStorage().getItem("user");
  const myId = new toId(id);
  console.log('myID: ', myId);

  const checkIfConversationExists = await MessageContentModel.findOne({
    users: { $all: [myId, toId] },
  });

  if(checkIfConversationExists) {
  const getMyConversations = await UserModel.findOne({ _id: myId }).populate({
    path: "conversations",
    populate: {
      path: "users from",
      model: "User",  },
  }).select('conversations').sort({ 'createdAt': -1 });

  // splice out the element with my id in the users array
  getMyConversations?.conversations.forEach((conversation) => {
    conversation.users.splice(conversation.users.findIndex((user: any) => user._id.toString() === myId.toString()), 1)
  })



  // sort the conversations by the last message sent
  
  return { getMyConversations };
} else {
  return "Hi"
}


 
});
