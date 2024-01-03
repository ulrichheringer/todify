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

const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, status, edited, userId } = req.body;

    try {
        const todo = await Todo.findByIdAndUpdate(
            id,
            { name, description, status, edited, userId },
            { new: true }
        );

        if (!todo) return res.status(404).json({ message: "Todo not found" });

        if (
            todo.name === name &&
            todo.description === description &&
            todo.status === status &&
            todo.edited == edited &&
            todo.userId == userId
        ) {
            // If the provided data is identical!
            return res.status(204).send();
        }

        res.status(200).json(todo);
    } catch (error: any) {
        res.status(500).json({
            message: "Error updating todo",
            error: error.message,
        });
    }
};

export default { getTodos, createTodo, updateTodo };
