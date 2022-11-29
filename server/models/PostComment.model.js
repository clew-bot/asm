import mongoose from "mongoose";
const PostComment = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    postRef: {
        type: String,
        required: true,
        ref: "UserPost",
    },
    content: {
        type: String,
        required: true,
    },
    likeCount: {
        type: Number,
        default: 0,
    }, 
    replies: {
        type: Array,
        default: [],
        ref: "PostComment",
    },
    photos: {
        type: Array,
        default: [],
    }
    },
    { timestamps: true }
    );

export default mongoose.model("PostComment", PostComment);