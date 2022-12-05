import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    handleName: {
        type: String,
    },
    bio: {
        type: String,
    },
    birthday: {
        type: Date, 
    },
    location: {
        type: String,
    },
    friends: {
        type: Array,
        default: [],
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    photos: {
        type: Array,
        default: [],
    },
    posts: {
        type: Array,
        default: [],
        ref: "UserPost",
    },
    friendRequests: {
        type: Array,
        default: [],
    },
    notifications: {
        type: Array,
        default: [],
        ref: "NotificationModel",
    },
    messages: {
        type: Array,
        default: [],
    },
    },
        { timestamps: true }
    );

UserSchema.pre("save", async function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
});

export default mongoose.model("User", UserSchema);