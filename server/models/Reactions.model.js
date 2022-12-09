import mongoose from "mongoose";
const ReactionModel = new mongoose.Schema({
    reactionType: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        default: "",
        ref: "User",
        required: true,
    },
    postReactedTo: {
        type: String,
        default: "",
        ref: "UserPost",
        required: true,
    },
    },
    { timestamps: true }
    );

export default mongoose.model("ReactionModel", ReactionModel);