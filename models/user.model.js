import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please add a username"],
    },

    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
}, { timestamps: true });

export default model("User", UserSchema);