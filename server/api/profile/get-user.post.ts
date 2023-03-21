import UserSchema from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id: any = await useStorage().getItem("user");


  const user2 = await UserSchema.findOne({ handleName: body })
  .populate({
    path: "posts",
    populate: [
      { path: "author" },
      { path: "poll" } // Add this line to populate the polls property inside posts
    ],
    options: { sort: { createdAt: -1 } }
  });
    if( user2?.pinnedPost === "" || user2?.pinnedPost === null || user2?.pinnedPost === undefined) {
        console.log('no pinned post')
        return user2
    } else {
     const user3 = await UserSchema.findOne({ handleName: body })
  .populate({
    path: "posts pinnedPost",
    populate: [
      { path: "author" },
      { path: "poll" } // Add this line to populate the polls property inside posts
    ],
    options: { sort: { createdAt: -1 } }
  });
      // console.log('user3: ', user3)
      return user3
    }
});
