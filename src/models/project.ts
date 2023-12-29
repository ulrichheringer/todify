import mongoose, { Model, Document, ObjectId } from "mongoose";

export interface IProject extends Document {
    _id: ObjectId;
    name: string;
    ownerId: ObjectId;
    collaborators: ObjectId[];
}

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    collaborators: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

export const Project: Model<IProject> = mongoose.model<IProject>(
    "Project",
    projectSchema
);
