import mongoose from "mongoose";
const UserPostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        ref: "User",
    },
    content: {
        type: String,
        required: true,
    },
    likeCount: {
        type: Number,
        default: 0,
    }, 
    comments: {
        type: Array,
        default: [],
        ref: "PostComment",
    },
    photos: {
        type: Array,
        default: [],
    },
    videos: {
        type: Array,
        default: [],
    },
    media: {
        type: Array,
        default: [],
    }
    },
    { timestamps: true }
    );

export default mongoose.model("UserPost", UserPostSchema);