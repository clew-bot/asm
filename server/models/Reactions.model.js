import mongoose from "mongoose";
const ReactionSchema = new mongoose.Schema({
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

const ReactionModel = mongoose.model("ReactionModel", ReactionSchema);
export default ReactionModel;