import mongoose, { Model, Document, ObjectId } from "mongoose";

enum Status {
    NSY, // -> Not Started Yet
    IP, // -> In Progress
    D, // -> Done
    R, // -> Reviewed
}

export interface ITodo extends Document {
    _id: ObjectId;
    name: string;
    description: string;
    status: Status;
    projectId?: ObjectId;
}

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["NSY", "IP", "D", "R"], required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
});

export const Todo: Model<ITodo> = mongoose.model<ITodo>("Todo", todoSchema);
