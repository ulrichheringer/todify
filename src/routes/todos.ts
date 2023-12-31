import express from "express";
import todosController from "../controllers/todos";

const routes = express.Router();

routes.get("/todos/:userId", todosController.getTodos);

export = routes;
