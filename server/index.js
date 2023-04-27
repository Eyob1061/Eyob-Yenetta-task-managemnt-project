import express from "express"
import Connection from "./database/db.js"
import dotenv from "dotenv";

dotenv.config();
const app = express()
const PORT = process.env.PORT
Connection()

app.listen(PORT, () =>{
    console.log(`listen on port ${PORT}`)
})