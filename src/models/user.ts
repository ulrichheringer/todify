import mongoose, { Model, Document, ObjectId } from "mongoose";

export interface IUser extends Document {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
