import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    let todos = Todo.find({});
    return res.status(200).json({
        data: todos,
    });
};
