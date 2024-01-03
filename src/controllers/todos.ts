import mongoose, { ObjectId } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

const getTodos = async (req: Request, res: Response) => {
    let userId = new mongoose.Types.ObjectId(req.params.userId);
    let todos = await Todo.find({ userId }).lean();
    return res.status(200).json(todos);
};

const createTodo = async (req: Request, res: Response) => {
    let todo = await Todo.create({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        edited: req.body.edited,
        userId: req.body.userId,
        projectId: req.body.projectId,
    });
    return res.status(201).json(todo);
};

export default { getTodos, createTodo };
