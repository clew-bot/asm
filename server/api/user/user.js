import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const newUser = await UserModel.create(body);
    console.log('body', newUser)
    return "Hello!"
})