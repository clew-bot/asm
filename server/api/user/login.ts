import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const userExist: any = await UserModel.findOne({
        $or: [{ username: body.username }, { email: body.username }],
    });

    if(userExist === null) {
        return { error: true, message: "User does not exist"};
    } else {
        const passwordMatch = await bcrypt.compare(body.password, userExist?.password);

        if (passwordMatch) {
            console.log("YAY")
            const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, {
                expiresIn: 86400, // 24 hours
            });
            setCookie(event, "altine", token, {
                httpOnly: true,
                maxAge: 86400,
                path: "/",
                secure: true,
            });

            return { error: false, message: "Nice"};
            } else {
                console.log("Wrong Password! 🤬");
                return { error: true, message: "Wrong Password" };
            }
    }
})