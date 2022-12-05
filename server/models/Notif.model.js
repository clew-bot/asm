import mongoose from "mongoose";
const NotificationModel = new mongoose.Schema({
    title: {
        type: String,
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
    from: {
        type: String,
        default: "",
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        default: "",
        required: true,
    },
    },
    { timestamps: true }
    );

export default mongoose.model("NotificationModel", NotificationModel);