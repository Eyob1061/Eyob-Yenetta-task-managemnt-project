import Todo from "../model/Todo.js";

export const getAllTodos = async(req, res) =>{
    try{
        const todos = await Todo.find({}).sort({'createdAt' : -1})
        return res.status(200).json(todos)
    }catch(err){
        return res.status(500).json(err.message);
    }
}