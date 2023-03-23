import mongoose from "mongoose";
import ReactionsModel from "./Reactions.model";
const UserPostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        ref: "User",
    },
    content: {
        type: String,
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
    },
    reactions: {
        type: Array,
        default: [],
        ref: "ReactionModel",
    },
    poll: {
        type: Object,
        default: {},
        ref: "PollModel",
    },
    views: {
        type: Number,
        default: 0,
    },
  
    },
    { timestamps: true }
    );

    // delete reactions when post is deleted
    UserPostSchema.pre('remove', function(next) {
        // 'this' is the client being removed. Provide callbacks here if you want
        // to be notified of the calls' result.
        ReactionsModel.remove({postReactedTo: this._id}).exec();
        // ReactionsModel.remove({client_id: this._id}).exec();
        next();
    });
const UserPost = mongoose.model("UserPost", UserPostSchema);
export default UserPost