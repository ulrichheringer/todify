import mongoose, { ObjectId } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    let userId = new mongoose.Types.ObjectId(req.params.userId);
    let todos = await Todo.find({ userId }).lean();
    return res.status(200).json(todos);
};

export default { getTodos };
