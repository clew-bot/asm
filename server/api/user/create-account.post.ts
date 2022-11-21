import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";

import { defineEventHandler } from "h3";

interface CreateAccountPostBody {
    username: string;
    email: string;
    password: string;
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const userExist = await UserModel.findOne({
        $or: [{ username: body.username }, { email: body.email }],
    });

    if (userExist === null) {
        const newUser:CreateAccountPostBody = await UserModel.create({
                username: body.username,
                email: body.email,
                password: body.password,
            });

        console.log(body.username, "has been created 🔥");
        return "Hello!"
    } else {
        console.log("User already exist");
        return "User already exist";
    }
})