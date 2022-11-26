import UserModel from "~~/server/models/User.model";
import mongoose from "mongoose";
import { builtinModules } from "module";
import { type } from "os";

export default defineEventHandler(async (event) => {
    console.log("hi")
    const imageReader = await readBody(event);
    console.log(imageReader)

    const response = await $fetch('https://thumbsnap.com/api/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },

});
    // console.log(response.media)
});