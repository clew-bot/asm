import mongoose from "mongoose";
const MessageModel = new mongoose.Schema({
    to: {
        type: String,
        default: "",
        ref: "User",
        required: true,
    },
    from: {
        type: String,
        default: "",
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
    images: {
        type: Array,
        default: [],
    },
    video: {
        type: String,
        default: "",
    },
    },
    { timestamps: true }
    );

export default mongoose.model("MessageModel", MessageModel);