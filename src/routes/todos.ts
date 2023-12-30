import express from "express";
import todosController from "../controllers/todos";

const routes = express.Router();

routes.get("/todos", todosController.getTodos);

export = routes;
