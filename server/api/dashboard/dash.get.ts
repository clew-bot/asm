import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';

interface CreateAccountPostBody {
    username: string;
    email: string;
    password: string;
}

export default defineEventHandler(async (event) => {
    return "Hello World";
})