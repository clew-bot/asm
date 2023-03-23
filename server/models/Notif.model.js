import mongoose from "mongoose";
import UserModel from "./User.model";
const NotificationModelSchema = new mongoose.Schema({
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
        ref: UserModel,
        required: true,
    },
    to: {
        type: String,
        default: "",
        ref: UserModel,
    },
    type: {
        type: String,
        default: "",
        required: true,
    },
    },
    { timestamps: true }
    );

const NotificationModel = mongoose.model("NotificationModel", NotificationModelSchema);
export default NotificationModel