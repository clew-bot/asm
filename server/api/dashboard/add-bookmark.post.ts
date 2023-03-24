import mongoose from "mongoose";
import UserPost from "~~/server/models/UserPost.model";
import UserModel from "~~/server/models/User.model";
import PollModel from "~~/server/models/PollModel.model";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id: any = await useStorage().getItem("user");

  console.log(body);

  // Add post ID to book marks array in user model
  const bookmarkPost = await UserModel.findOne({
    _id: new toId(id),
    bookmarks: body,
    });

    if (bookmarkPost) {
      return await UserModel.findOneAndUpdate(
        { _id: new toId(id) },
        { $pull: { bookmarks: body } }
      );
    } else {
  await UserModel.findOneAndUpdate(
    { _id: new toId(id) },
    { $push: { bookmarks: new toId(body) } }
  );

  //if post is already bookmarked, remove it from bookmarks array


  return "Hi";
    }
});
