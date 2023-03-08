import mongoose from "mongoose";
const PollModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    poll: {
        type: Object,
        required: true,
    },  
    votes: {
        type: Array,
        default: [],
        ref: "User",
    },
    },
    { timestamps: true }
    );


export default mongoose.model("PollModel", PollModel);