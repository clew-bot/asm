import mongoose from "mongoose";
import UserSchema from "~~/server/models/User.model";

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
      { path: "poll" },
    ],
    options: { sort: { createdAt: -1 } }
  }).populate({
    path: "friends",
    select: "profilePicture friends username handleName",
  });
    if( user2?.pinnedPost === "" || user2?.pinnedPost === null || user2?.pinnedPost === undefined) {
        return user2
    }
    else {

     const user3 = await UserSchema.findOne({ handleName: body })
      .populate({
        path: "posts pinnedPost",
        populate: [
          { path: "author" },
          { path: "poll" } // Add this line to populate the polls property inside posts
        ],
        options: { sort: { createdAt: -1 } }
        })
        .populate({
          path: "friends",
          select: "profilePicture friends username handleName",
        });

        console.log("user3: ", user3)
      return user3
    }
});
