import UserSchema from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id: any = await useStorage().getItem("user");

    const user = await UserSchema.findOne({ handleName: body })
    .populate({ path: "posts", populate: { path: "author" }, options: { sort: { createdAt: -1 } } });

    user?.populate({ path: "pinnedPost", populate: { path: "author" }})

    return user;
});
