import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    let todos = await Todo.find().lean();
    return res.status(200).json(todos);
};

export default { getTodos };
