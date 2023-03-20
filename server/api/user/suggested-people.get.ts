import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
    const id:any = await useStorage().getItem("user");

    // Get suggested people but not the current user
    // const suggestedPeople = await UserModel.find({ _id: { $ne: new toId(id) } }).limit(5).select(['username', 'profilePicture', 'name'])
    const suggestedPeople = await UserModel.find({_id: { $ne: new toId(id) }}).limit(3).select(['username', 'profilePicture', 'name'])

    console.log("Suggested People From Server: ", suggestedPeople)
    return suggestedPeople;
})