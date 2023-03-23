import mongoose from "mongoose";
import UserModel from "./User.model";
import UserPost from "./UserPost.model";
const ReactionSchema = new mongoose.Schema({
    reactionType: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        default: "",
        ref: UserModel,
        required: true,
    },
    postReactedTo: {
        type: String,
        default: "",
        ref: UserPost,
        required: true,
    },
    },
    { timestamps: true }
    );

const ReactionModel = mongoose.model("ReactionModel", ReactionSchema);
export default ReactionModel;