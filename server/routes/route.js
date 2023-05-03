import express from "express";
import { addTodo } from "../controllers/addTodo.js";
import { getAllTodos} from "../controllers/getAllTodos.js";
import { toggleTodoDone } from "../controllers/toogleTodoDone.js";
import { updateTodo } from "../controllers/updateTodo.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos",  getAllTodos);
route.get("/todo/:id", toggleTodoDone);
route.put('/todos/:id', updateTodo);

export default route;