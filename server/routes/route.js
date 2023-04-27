import express from "express";
import { addTodo } from "../controllers/addTodo.js";
import { getAllTodos } from "../controllers/getAllTodos.js";
const route = express.Router();
route.post("/todos", addTodo);
route.get("/todos",  getAllTodos);
export default route;