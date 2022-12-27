import mongoose from "mongoose";
const ConversationModel = new mongoose.Schema({
    users: {
        type: Array,
        required: true,
    },
    latestMessage: {
        type: String,
        default: "",
    },
    read: {
        type: Boolean,
        default: false,
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        default: "",
        ref: "User",
        required: true,
    }},
    {
        timestamps: true
    }
    );

export default mongoose.model("Conversation", ConversationModel);