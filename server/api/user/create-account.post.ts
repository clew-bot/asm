import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';
const config = useRuntimeConfig();
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
    let r = (Math.random() + 1).toString(36).substring(7);

    if (userExist === null) {
        const newUser = await UserModel.create({
                username: body.username,
                email: body.email,
                password: body.password,
                handleName: 'user' + r.toString(),
                location: 'Earth',
            });
        console.log(newUser);
        const token = jwt.sign({ id: newUser._id }, config.JWT_SECRET, {
            expiresIn: 43200, // 12 hours
        });
        console.log('token: ',token);
        setCookie(event, "altine", token);
        console.log(body.username, "has been created 🔥");
        return token
    } else {
        console.log("User already exist");
        return { error: true, message: "User Already Exists" };
    }
})